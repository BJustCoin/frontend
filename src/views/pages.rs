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
    config.route("/", web::get().to(index_page));
    config.route("/about", web::get().to(about_page));
    config.route("/for-lawyers", web::get().to(for_lawyers_page));
    config.route("/for-mediatiors", web::get().to(for_mediatiors_page));
    config.route("/terms-and-conditions", web::get().to(terms_page));
    config.route("/privacy-policy", web::get().to(policy_page));
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

pub async fn index_page (
    req: HttpRequest
) -> actix_web::Result<HttpResponse> {
    let is_ajax = get_ajax(&req); 
    #[derive(TemplateOnce)]
    #[template(path = "index.stpl")]
    struct DesctopAuthTemplate {
        title:       String,
        description: String,
        is_ajax:     u8,
    }
    let body = DesctopAuthTemplate {
        title:       "JusMediation | How It Works".to_string(),
        description: "JusMediation is an easy-to-use, app-enabled platform that allows you to find the right lawyer to meet your needs across a wide range of legal areas and industries from one-time consults to complex issues with ease and transparency from start to finish of your legal issues.".to_string(),
        is_ajax:     is_ajax,
    }
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn about_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "about.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn for_lawyers_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "for_lawyers.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn for_mediatiors_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "for_mediatiors.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn not_found_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "not_found.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn terms_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "terms.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn policy_page() -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)]
    #[template(path = "policy.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}