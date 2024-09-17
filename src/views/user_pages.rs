use actix_web::{
    HttpRequest,
    HttpResponse,
    Responder,
    web,
    error::InternalError,
    http::StatusCode,
};
use sailfish::TemplateOnce;
use serde::{Serialize, Deserialize};


pub fn user_urls(config: &mut web::ServiceConfig) {
    config.route("/user_home/", web::get().to(user_home_page));
}

pub async fn user_home_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "user/index.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}