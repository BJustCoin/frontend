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
    is_signed_in,
    verify,
    NewUserForm,
};
use actix_session::Session;
use crate::errors::AuthError;


pub fn auth_urls(config: &mut web::ServiceConfig) {
    config.route("/login/", web::get().to(auth_page));
    config.route("/signup/", web::get().to(signup_page));
    config.route("/login/", web::get().to(login));
    config.route("/signup/", web::get().to(signup));
}

pub const URL: &str = "http://69.167.186.207:9330";
#[derive(Deserialize)]
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
}
#[derive(Deserialize, Serialize)]
pub struct NewUser {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
}
#[derive(Deserialize, Serialize)]
pub struct NewUser2 {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
}

pub async fn login(data: Json<LoginUser>, session: &Session) -> Json<AuthResp> {
    if is_signed_in(&session) {
        return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("already authenteficated"));
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
            set_current_user(&session, &l_data);
            Json(user)
        },
        Err(_) => Json(AuthResp {
            id:         0,
            first_name: "".to_string(),
            last_name:  "".to_string(),
            email:      "".to_string(),
            perm:       0,
        }),
    }
}
pub async fn signup(data: Json<NewUser>, session: &Session) -> Json<AuthResp> {
    if is_signed_in(&session) {
        return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("already authenteficated"));
    }
    let r_data = LoginUser {
        email:    data.email.clone(),
        password: data.password.clone(),
    };
    let l_data = NewUser2 {
        first_name: data.first_name.clone(),
        last_name:  data.last_name.clone(),
        email:      data.email.clone(),
        password:   data.password.clone(),
    }; 
    let res = request_post::<NewUser2, AuthResp> (
        URL.to_owned() + &"/signup/".to_string(),
        &l_data,
        false
    ).await;

    match res {
        Ok(user) => {
            set_current_user(&session, &r_data);
            Json(user)
        },
        Err(_) => Json(AuthResp {
            id:         0,
            first_name: "".to_string(),
            last_name:  "".to_string(),
            email:      "".to_string(),
            perm:       0,
        }),
    }
}

pub async fn auth_page(session: &Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "auth/auth.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn signup_page(session: &Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "auth/signup.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}