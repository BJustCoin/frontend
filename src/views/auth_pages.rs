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
    config.route("/invite/", web::post().to(invite));
}


#[derive(Serialize, Deserialize, Debug)]
pub struct LoginUser {
    pub email:    String,
    pub password: String,
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
} 
#[derive(Deserialize, Serialize)]
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
    pub status: i32,
}

pub async fn login(session: Session, data: Json<LoginUser>) -> Json<Resp> {
    if is_signed_in(&session) {
        return Json(Resp {
            status: 400,
        });
    }
    let l_data = LoginUser {
        email:    data.email.clone(),
        password: data.password.clone(),
    }; 
    let res = request_post::<LoginUser, AuthResp> (
        URL.to_owned() + &"/login/".to_string(),
        &l_data, 
        false
    ).await;

    match res {
        Ok(user) => {
            if user.id == 0 {
                return Json(Resp {
                    status: 400,
                });
            }
            crate::utils::set_current_user(&session, &user);
            return Json(Resp {
                status: 200,
            });
        },
        Err(_) => Json(Resp {
                    status: 400,
                }),
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct EmailUserReq {
    first_name: String,
    last_name:  String,
    email:      String,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct EmailUserReq2 {
    name:  String,
    email: String,
}
pub async fn invite(session: Session, data: Json<EmailUserReq>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        return crate::views::not_found_page(session).await;
    }
    let l_data = EmailUserReq2 {
        name:  data.first_name.clone() + &" ".to_string() + &data.last_name.clone(),
        email: data.email.clone(),
    }; 
    let res = request_post::<EmailUserReq2, AuthResp> (
        URL.to_owned() + &"/invite/".to_string(),
        &l_data, 
        false
    ).await; 

    match res {
        Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
        Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
    }
}

pub async fn signup(session: Session, data: Json<NewUser>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        return crate::views::not_found_page(session).await;
    }
    let l_data = NewUser {
        first_name: data.first_name.clone(),
        last_name:  data.last_name.clone(),
        email:      data.email.clone(),
        password:   data.password.clone(),
        token:      data.token.clone(),
    };   
    let res = request_post::<NewUser, AuthResp> (
        URL.to_owned() + &"/signup/".to_string(),
        &l_data,
        false
    ).await;

    match res {
        Ok(user) => {
            crate::utils::set_current_user(&session, &user);
            crate::views::exchange_page(session).await
        },
        Err(_) => crate::views::not_found_page(session).await,
    }
}
pub async fn reset(session: Session, data: Json<NewPassword>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        return crate::views::not_found_page(session).await;
    }
    let l_data = NewPassword {
        password: data.password.clone(),
    }; 
    let res = request_post::<NewPassword, AuthResp> (
        URL.to_owned() + &"/reset/".to_string(),
        &l_data,
        false
    ).await;

    match res {
        Ok(user) => {
            crate::utils::set_current_user(&session, &user);
            crate::views::exchange_page(session).await
        },
        Err(_) => crate::views::not_found_page(session).await,
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