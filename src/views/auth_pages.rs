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
use actix_multipart::{Field, Multipart};
use std::borrow::BorrowMut;
use futures::StreamExt;

pub fn auth_urls(config: &mut web::ServiceConfig) {
    config.route("/login/", web::get().to(auth_page));
    config.route("/signup/", web::get().to(signup_page));
    config.route("/login/", web::post().to(login));
    config.route("/signup/", web::post().to(signup));
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

pub async fn login_form(payload: &mut Multipart) -> LoginUser {
    let mut form: LoginUser = LoginUser {
        email:    "".to_string(),
        password: "".to_string(),
    };

    while let Some(item) = payload.next().await {
        let mut field: Field = item.expect("split_payload err");
        while let Some(chunk) = field.next().await {
            let data = chunk.expect("split_payload err chunk");
            if let Ok(s) = std::str::from_utf8(&data) {
                let data_string = s.to_string();
                if field.name() == "email" {
                    form.email = data_string
                } else if field.name() == "password" {
                    form.password = data_string
                }
            }
        }
    }
    form
}
pub async fn login(session: Session, mut payload: Multipart) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) { 
        return crate::views::not_found_page(session).await;
    }
    let form = login_form(payload.borrow_mut()).await;
    let l_data = LoginUser {
        email:    form.email.clone(),
        password: form.password.clone(),
    }; 
    let res = request_post::<LoginUser, AuthResp> (
        URL.to_owned() + &"/login/".to_string(),
        &l_data,
        false
    ).await;

    match res {
        Ok(user) => {
            crate::utils::set_current_user(&session, &user);
            crate::views::admin_exchange_page(session).await
        },
        Err(_) => crate::views::not_found_page(session).await,
    }
}

#[derive(Deserialize, Serialize)]
pub struct NewUserForm {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
}
pub async fn signup_form(payload: &mut Multipart) -> NewUserForm {
    let mut form: NewUserForm = NewUserForm {
        first_name: "".to_string(),
        last_name:  "".to_string(),
        email:      "".to_string(),
        password:   "".to_string(),
    };

    while let Some(item) = payload.next().await {
        let mut field: Field = item.expect("split_payload err");
        while let Some(chunk) = field.next().await {
            let data = chunk.expect("split_payload err chunk");
            if let Ok(s) = std::str::from_utf8(&data) {
                let data_string = s.to_string();
                if field.name() == "first_name" {
                    form.first_name = data_string
                }
                else if field.name() == "last_name" {
                    form.last_name = data_string
                }
                else if field.name() == "email" {
                    form.email = data_string
                }
                else if field.name() == "password" {
                    form.password = data_string
                }
            }
        }
    }
    form
}
pub async fn signup(session: Session, mut payload: Multipart) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        return crate::views::not_found_page(session).await;
    }
    let form = signup_form(payload.borrow_mut()).await;
    let l_data = NewUser2 {
        first_name: form.first_name.clone(),
        last_name:  form.last_name.clone(),
        email:      form.email.clone(),
        password:   form.password.clone(),
    }; 
    let res = request_post::<NewUser2, AuthResp> (
        URL.to_owned() + &"/signup/".to_string(),
        &l_data,
        false
    ).await;

    match res {
        Ok(user) => {
            crate::utils::set_current_user(&session, &user);
            crate::views::admin_exchange_page(session).await
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