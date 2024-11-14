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


pub fn pages_urls(config: &mut web::ServiceConfig) {
    config.route("/about/", web::get().to(about_page));
    config.route("/terms-and-conditions/", web::get().to(terms_page));
    config.route("/privacy-policy/", web::get().to(policy_page));
}

pub fn get_ajax(req: &HttpRequest) -> u8 {
    #[derive(Debug, Deserialize)]
    struct Params {
        pub ajax: Option<u8>,
    }
    let params_some = web::Query::<Params>::from_query(&req.query_string());
    let mut is_ajax = 0;

    if params_some.is_ok() {
        let params = params_some.unwrap();
        if params.ajax.is_some() {
            is_ajax = params.ajax.unwrap();
        }
        else {
            is_ajax = 0;
        }
    }

    is_ajax
}

pub async fn get_first_load_page (    
    title:       String,
    description: String,
    uri:         String,
) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "first_load.stpl")]
    struct Template {
        title:       String,
        description: String,
        uri:         String,
    }
    let body = Template {
        title:       title,
        description: description,
        uri:         uri,
    }
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn about_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "about.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn not_found_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "not_found.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn terms_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "terms.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn policy_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "policy.stpl")]
    struct Template;
    let body = Template{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}