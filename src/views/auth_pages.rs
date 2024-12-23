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

pub const URL: &str = "https://back.justlaw.network";
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
}
#[derive(Deserialize, Serialize)]
pub struct NewUser {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct NewUser2 {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
}
#[derive(Deserialize, Serialize, Debug)]
pub struct NewPassword {
    pub password: String,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct EmailVerificationTokenMessage {
    pub id: Option<String>,
    pub email: String,
}

pub async fn login(session: Session, data: Json<LoginUser>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        return crate::views::not_found_page(session).await;
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
            crate::utils::set_current_user(&session, &user);
            crate::views::exchange_page(session).await
        },
        Err(_) => crate::views::not_found_page(session).await,
    }
}
pub async fn invite(session: Session, data: Json<EmailVerificationTokenMessage>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        return crate::views::not_found_page(session).await;
    }
    let l_data = EmailVerificationTokenMessage {
        id:    None,
        email: data.email.clone(),
    }; 
    let res = request_post::<EmailVerificationTokenMessage, AuthResp> (
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