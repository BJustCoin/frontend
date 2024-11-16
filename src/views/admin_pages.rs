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
use actix_session::Session;
use crate::utils::{
    get_current_user,
    is_signed_in,
};
use crate::views::AuthResp;


pub fn admin_urls(config: &mut web::ServiceConfig) {
    config.route("/admin_home/", web::get().to(admin_home_page));
    config.route("/admin_home2/", web::get().to(admin_home2_page));
    config.route("/profile/", web::get().to(admin_profile_page));
    config.route("/wallets/", web::get().to(admin_wallets_page));
    config.route("/setting/", web::get().to(admin_setting_page));
    config.route("/transactions/", web::get().to(admin_transactions_page));
    config.route("/gainers_losers/", web::get().to(admin_gainers_losers_page));
    config.route("/market/", web::get().to(admin_market_page));
    config.route("/stats/", web::get().to(admin_stats_page));
    config.route("/ico_distribution_countdown/", web::get().to(admin_ico_distribution_countdown_page));
    config.route("/ico_roadmap_timeline/", web::get().to(admin_ico_roadmap_timeline_page));
    config.route("/ico_progress/", web::get().to(admin_ico_progress_page));
    config.route("/ico_details/", web::get().to(admin_ico_details_page));
    config.route("/ico_listing/", web::get().to(admin_ico_listing_page));
    config.route("/ico_filter/", web::get().to(admin_ico_filter_page));
    config.route("/members_list/", web::get().to(admin_members_list_page));
    config.route("/tickers/", web::get().to(admin_tickers_page));
    config.route("/tickers_live_pricing/", web::get().to(admin_tickers_live_pricing_page));
    config.route("/transactions_tables/", web::get().to(admin_transactions_tables_page));
    config.route("/transaction_search/", web::get().to(admin_transaction_search_page));
    config.route("/transaction_details/", web::get().to(admin_transaction_details_page));
    config.route("/transactions_counter/", web::get().to(admin_transactions_counter_page));
    config.route("/support/", web::get().to(admin_support_page));

    config.route("/invoice/", web::get().to(admin_invoice_page));
    config.route("/invoices_list/", web::get().to(admin_invoices_list_page));
    config.route("/exchange/", web::get().to(admin_exchange_page));
} 

pub async fn admin_home_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        #[derive(TemplateOnce)] 
        #[template(path = "admin/index.stpl")]
        struct Template {
            request_user: AuthResp,
        }
        let body = Template {
            request_user: _request_user,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(""))
        //crate::views::auth_page(session).await
    }
}
pub async fn admin_home2_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        #[derive(TemplateOnce)]
        #[template(path = "admin/index2.stpl")]
        struct Template {
            request_user: AuthResp,
        }
        let body = Template {
            request_user: _request_user,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session).await
    }
}
pub async fn admin_profile_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/profile.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_wallets_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/wallets.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_setting_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/setting.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_transactions_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/transactions.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_gainers_losers_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/gainers_losers.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_market_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/market.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_stats_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/stats.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_ico_distribution_countdown_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/ico_distribution_countdown.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_ico_roadmap_timeline_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/ico_roadmap_timeline.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_ico_progress_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/ico_progress.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_ico_details_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/ico_details.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_ico_listing_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/ico_listing.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_ico_filter_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/ico_filter.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_members_list_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/members_list.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}



pub async fn admin_tickers_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/tickers.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_tickers_live_pricing_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/tickers_live_pricing.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_transactions_tables_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/transactions_tables.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_transaction_search_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/transaction_search.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_transaction_details_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/transaction_details.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_transactions_counter_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/transactions_counter.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_support_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/support.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn admin_invoice_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/invoice.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}
pub async fn admin_invoices_list_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/invoices_list.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}

pub async fn admin_exchange_page(session: Session) -> actix_web::Result<HttpResponse> {
    #[derive(TemplateOnce)] 
    #[template(path = "admin/exchange.stpl")]
    struct DesctopAuthTemplate;
    let body = DesctopAuthTemplate{}
    .render_once()
    .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
}