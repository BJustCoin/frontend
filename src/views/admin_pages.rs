use actix_web::{
    HttpRequest,
    HttpResponse,
    Responder,
    web,
    error::InternalError,
    http::StatusCode,
    web::Json
};
use sailfish::TemplateOnce;
use serde::{Serialize, Deserialize};
use actix_session::Session;
use crate::utils::{
    get_current_user,
    is_signed_in,
    URL,
};
use crate::views::{AuthResp, AuthResp2};


pub fn admin_urls(config: &mut web::ServiceConfig) {
    config.route("/admin_home/", web::get().to(admin_home_page));
    config.route("/users/", web::get().to(users_list_page));
    config.route("/admins/", web::get().to(admins_list_page));
    config.route("/banned_users/", web::get().to(banned_users_list_page));
    config.route("/banned_admins/", web::get().to(banned_admins_list_page));

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
    config.route("/tickers/", web::get().to(admin_tickers_page));
    config.route("/tickers_live_pricing/", web::get().to(admin_tickers_live_pricing_page));
    config.route("/transactions_tables/", web::get().to(admin_transactions_tables_page));
    config.route("/transaction_search/", web::get().to(admin_transaction_search_page));
    config.route("/transaction_details/", web::get().to(admin_transaction_details_page));
    config.route("/transactions_counter/", web::get().to(admin_transactions_counter_page));
    config.route("/support/", web::get().to(admin_support_page));

    config.route("/invoice/", web::get().to(admin_invoice_page));
    config.route("/invoices_list/", web::get().to(admin_invoices_list_page));
    config.route("/exchange/", web::get().to(exchange_page));

    config.route("/block_user/{id}/", web::post().to(block_user)); 
    config.route("/unblock_user/{id}/", web::post().to(unblock_user));
    config.route("/block_admin/{id}/", web::post().to(block_admin));
    config.route("/unblock_admin/{id}/", web::post().to(unblock_admin));
    config.route("/create_admin/{id}/", web::post().to(create_admin));
    config.route("/drop_admin/{id}/", web::post().to(drop_admin));
    config.route("/create_can_buy/{id}/", web::post().to(create_can_buy));
    config.route("/delete_can_buy/{id}/", web::post().to(delete_can_buy));
}

#[derive(Deserialize, Serialize, Debug)]
pub struct AuthRespData {
    pub data: Vec<AuthResp>,
    pub next: i64, 
}
pub async fn users_list_page(req: HttpRequest,session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_users/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<AuthResp> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)]
        #[template(path = "admin/users.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<AuthResp>,
            next_page:    i64,
        }
        let body = Template {
            request_user: _request_user,
            object_list:  list,
            next_page:    next_page,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session).await
    }
}
pub async fn admins_list_page(req: HttpRequest,session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_admins/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<AuthResp> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)]
        #[template(path = "admin/admins.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<AuthResp>,
            next_page:    i64,
        }
        let body = Template {
            request_user: _request_user,
            object_list:  list,
            next_page:    next_page,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session).await
    }
}
pub async fn banned_users_list_page(req: HttpRequest,session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_banned_users/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<AuthResp> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)]
        #[template(path = "admin/banned_users.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<AuthResp>,
            next_page:    i64,
        }
        let body = Template {
            request_user: _request_user,
            object_list:  list,
            next_page:    next_page,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session).await
    }
}
pub async fn banned_admins_list_page(req: HttpRequest,session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_banned_admins/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<AuthResp> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)]
        #[template(path = "admin/banned_admins.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<AuthResp>,
            next_page:    i64,
        }
        let body = Template {
            request_user: _request_user,
            object_list:  list,
            next_page:    next_page,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session).await
    }
}


#[derive(Deserialize, Serialize, Debug)]
pub struct ItemId {
    pub id:  i32,
}
pub async fn block_user(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        let l_data = ItemId {
            id: data.id,
        }; 
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/block_user/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn unblock_user(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/unblock_user/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn block_admin(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/block_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn unblock_admin(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/unblock_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn create_admin(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/create_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn drop_admin(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/drop_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn create_can_buy(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/create_can_buy/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn delete_can_buy(req: HttpRequest, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&req);
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/delete_can_buy/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}

pub async fn admin_home_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)] 
        #[template(path = "admin/index.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_home2_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/index2.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_profile_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/profile.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_wallets_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/wallets.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_setting_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/setting.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_transactions_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/transactions.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_gainers_losers_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/gainers_losers.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_market_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/market.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_stats_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/stats.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_ico_distribution_countdown_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/ico_distribution_countdown.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_ico_roadmap_timeline_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/ico_roadmap_timeline.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_ico_progress_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/ico_progress.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_ico_details_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/ico_details.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_ico_listing_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/ico_listing.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_ico_filter_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/ico_filter.stpl")]
        struct Template {
            request_user: AuthResp2,
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

pub async fn admin_tickers_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/tickers.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_tickers_live_pricing_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/tickers_live_pricing.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_transactions_tables_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/transactions_tables.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_transaction_search_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/transaction_search.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_transaction_details_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/transaction_details.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_transactions_counter_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/transaction_counter.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_support_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/support.stpl")]
        struct Template {
            request_user: AuthResp2,
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

pub async fn admin_invoice_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/invoice.stpl")]
        struct Template {
            request_user: AuthResp2,
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
pub async fn admin_invoices_list_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/invoices_list.stpl")]
        struct Template {
            request_user: AuthResp2,
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

pub async fn exchange_page(req: HttpRequest) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&req) {
        let _request_user = get_current_user(&req);
        #[derive(TemplateOnce)]
        #[template(path = "admin/exchange.stpl")]
        struct Template {
            request_user: AuthResp2,
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