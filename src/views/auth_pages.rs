use actix_web::{
    HttpRequest,
    HttpResponse,
    Responder,
    web,
    error::InternalError,
    http::StatusCode,
    dev::ConnectionInfo,
    web::Json,
};
use sailfish::TemplateOnce;
use serde::{Serialize, Deserialize};
use crate::utils::{
    get_current_user,
    NewUserForm,
    is_signed_in,
    URL,
};
use crate::utils::request_post;
use actix_session::Session;


pub fn auth_urls(config: &mut web::ServiceConfig) {
    config.route("/", web::get().to(auth_page));
    config.route("/signup/", web::get().to(signup_page));
    config.route("/reset/", web::get().to(reset_page));
    config.route("/login/", web::post().to(login));
    config.route("/signup/", web::post().to(signup));
    config.route("/reset/", web::post().to(reset));
    config.route("/invite/", web::post().to(invite));
    config.route("/logout/", web::get().to(logout));
}

pub async fn logout(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    session.purge(); 
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}


#[derive(Serialize, Deserialize, Debug)]
pub struct LoginUser {
    pub email:    String,
    pub password: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserWallet {
    pub id:   i32,
    pub link: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct UserWhiteList {
    pub wallet:     String,
    pub tokens:     String,
    pub token_type: i16,
}

impl UserWhiteList {
    pub fn get_tokenomic_type(&self) -> String {
        return match self.token_type {
            0 =>  "Strategic".to_string(),
            1 =>  "Seed".to_string(),
            2 =>  "Private Sale".to_string(),
            3 =>  "IDO".to_string(),
            4 =>  "Public Sale".to_string(),
            5 =>  "Advisors".to_string(),
            6 =>  "Team".to_string(),
            7 =>  "Future Team".to_string(),
            8 =>  "Incetives".to_string(),
            9 =>  "Liquidity".to_string(),
            10 => "Ecosystem".to_string(),
            11 => "Loyalty".to_string(),
            _ =>  "Uncnown stage".to_string(),
        }
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct AuthResp {
    pub id:         i32,
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub perm:       i16,
    pub image:      Option<String>,
    pub phone:      Option<String>,
    pub white_list: Vec<UserWhiteList>,
} 

#[derive(Deserialize, Serialize, Debug)]
pub struct AuthResp2 { 
    pub id:         i32,
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub perm:       i16,
    pub image:      Option<String>,
    pub phone:      Option<String>,
    pub uuid:       String,
    pub white_list: Vec<UserWhiteList>,
} 

#[derive(Deserialize, Serialize, Debug)]
pub struct NewUser {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
    pub token:      String,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct NewPassword {
    pub password: String,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Resp {
    pub status: String,
}

pub async fn login(session: Session, data: Json<LoginUser>) -> Json<Resp> {
    if is_signed_in(&session) {
        return Json(Resp {  
            status: "error".to_string(),
        }); 
    }
    let l_data = LoginUser {
        email:    data.email.clone(),
        password: data.password.clone(),
    }; 
    let res = request_post::<LoginUser, AuthResp2> (
        URL.to_owned() + &"/login/".to_string(),
        &l_data, 
        "".to_string()
    ).await;

    match res {
        Ok(user) => {
            if user.perm == 0 {
                return Json(Resp {
                    status: "The email address or password is incorrect.".to_string(),
                });
            }
            else if user.perm == 5 {
                return Json(Resp {
                    status: "This profile is block.".to_string(),
                });
            }
            crate::utils::set_current_user(&session, &user);
            return Json(Resp {
                status: "ok!".to_string(),
            });
        },
        Err(_) => Json(Resp {
                    status: "error".to_string(),
                }),
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct EmailUserReq {
    email:      String,
    password:   String,
    token:      String,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct EmailUserReq2 {
    name:  String,
    email: String,
}
#[derive(Debug, Deserialize)]
struct EmailResp {
    message:  String,
}

pub async fn invite(req: HttpRequest, data: Json<EmailUserReq2>) -> actix_web::Result<HttpResponse> {
    let l_data = EmailUserReq2 {
        name:  data.name.clone(),
        email: data.email.clone(),
    }; 
    let res = request_post::<EmailUserReq2, EmailResp> (
        URL.to_owned() + &"/invite/".to_string(),
        &l_data, 
        "".to_string()
    ).await; 

    match res {
        Ok(ok) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(ok.message)),
        Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("Error")),
    }
}

pub async fn signup(req: HttpRequest, session: Session, data: Json<NewUser>) -> actix_web::Result<HttpResponse> {
    let l_data = NewUser {
        first_name: data.first_name.clone(),
        last_name:  data.last_name.clone(),
        email:      data.email.clone(),
        password:   data.password.clone(),
        token:      data.token.clone(),
    }; 
    let res = request_post::<NewUser, AuthResp2> (
        URL.to_owned() + &"/signup/".to_string(),
        &l_data,
        "".to_string()
    ).await;

    match res {
        Ok(user) => {
            if user.perm != 0 {
                crate::utils::set_current_user(&session, &user);
            }
            Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(user.first_name))
        },
        Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct NewPasswordJson {
    pub email:    String,
    pub password: String,
    pub token:    String,
}
pub async fn reset(req: HttpRequest, session: Session, data: Json<NewPasswordJson>) -> actix_web::Result<HttpResponse> {
    let l_data = NewPasswordJson {
        email:    data.email.clone(),
        password: data.password.clone(),
        token:    data.token.clone(),
    };   
    let res = request_post::<NewPasswordJson, AuthResp2> (
        URL.to_owned() + &"/reset/".to_string(),
        &l_data,
        "".to_string()
    ).await;

    match res {
        Ok(user) => {
            crate::utils::set_current_user(&session, &user);
            crate::views::admin_profile_page(session).await
        },
        Err(_) => crate::views::not_found_page(session.clone()).await,
    }
}

pub async fn auth_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "auth/auth.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn signup_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "auth/signup.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn reset_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "auth/reset.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}