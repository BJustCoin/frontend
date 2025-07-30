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
    config.route("/holders/", web::get().to(holders_page));
    config.route("/admins/", web::get().to(admins_list_page));
    config.route("/banned_users/", web::get().to(banned_users_list_page));
    config.route("/banned_admins/", web::get().to(banned_admins_list_page));
    config.route("/logs/", web::get().to(logs_page));
    config.route("/user_logs/", web::get().to(user_logs_page));

    config.route("/get_new_applications/", web::get().to(get_new_applications));
    config.route("/get_approved_applications/", web::get().to(get_approved_applications));
    config.route("/get_rejected_applications/", web::get().to(get_rejected_applications));
    config.route("/reject_white_lists/", web::post().to(reject_white_lists));
    config.route("/approve_white_lists/", web::post().to(approve_white_lists));
    config.route("/create_suggest_item/", web::get().to(create_suggest_item_page));

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

    config.route("/block_user/", web::post().to(block_user)); 
    config.route("/unblock_user/", web::post().to(unblock_user));
    config.route("/block_admin/", web::post().to(block_admin));
    config.route("/unblock_admin/", web::post().to(unblock_admin));
    config.route("/create_admin/", web::post().to(create_admin));
    config.route("/drop_admin/", web::post().to(drop_admin));
    config.route("/agree_application/", web::post().to(agree_application));
    config.route("/create_suggest_item/", web::post().to(create_suggest_item));
    config.route("/send_mail/", web::post().to(send_mail));
    config.route("/subscribe/", web::post().to(subscribe));
    config.route("/delete_holder/", web::post().to(delete_holder));
}


#[derive(Debug, Deserialize, Serialize)]
pub struct ApplicationsJson {
    pub users:       Vec<ApplicationJson>,
    pub token_type:  i16,
}
#[derive(Debug, Deserialize, Serialize)]
pub struct ApplicationJson {
    pub id:          i32,
    pub first_name:  String,
    pub middle_name: String,
    pub last_name:   String,
    pub email:       String,
    pub address:     String,
}
#[derive(Debug, Deserialize, Serialize)]
pub struct ApplicationIdsJson {
    pub ids: Vec<i32>,
} 
pub async fn approve_white_lists(session: Session, data: Json<ApplicationsJson>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ApplicationsJson, ()> (
            URL.to_owned() + &"/approve_white_lists/".to_string(),
            &data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn reject_white_lists(session: Session, data: Json<ApplicationIdsJson>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ApplicationIdsJson, ()> (
            URL.to_owned() + &"/reject_white_lists/".to_string(),
            &data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}

pub async fn create_suggest_item_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        #[derive(TemplateOnce)]
        #[template(path = "admin/create_suggest_item.stpl")]
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
        crate::views::auth_page(session.clone()).await
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct SmallUser {
    pub id:         i32,
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
}
#[derive(Debug, Deserialize, Serialize)]
pub struct LogData {
    pub user:    SmallUser,
    pub text:    String,
    pub target:  Option<SmallUser>,
    pub created: chrono::NaiveDateTime,
} 
#[derive(Deserialize, Serialize, Debug)]
pub struct LogRespData {
    pub data: Vec<LogData>,
    pub next: i64,
}
pub async fn logs_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }   
        let page = crate::utils::get_page(&req);
        let object_list: Vec<LogData>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_logs/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<LogRespData>(url, _request_user.uuid.clone()).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<LogData> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)]
        #[template(path = "admin/logs.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<LogData>,
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
        crate::views::auth_page(session.clone()).await
    }
}

pub async fn user_logs_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let id = crate::utils::get_id(&req);
        let object_list: Vec<LogData>;
        let next_page: i64;
        let url = URL.to_string() 
            + &"/get_user_logs/?page=".to_string() 
            + &page.to_string()
            + &"&id=".to_string() 
            + &id.to_string();
        let resp = crate::utils::request_get::<LogRespData>(url, _request_user.uuid.clone()).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<LogData> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)]
        #[template(path = "admin/user_logs.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<LogData>,
            next_page:    i64,
            id:           i32,
        }
        let body = Template {
            request_user: _request_user,
            object_list:  list,
            next_page:    next_page,
            id:           id,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session.clone()).await
    }
}


#[derive(Deserialize, Serialize, Debug)]
pub struct SuggestItem {
    pub id:          i32,
    pub first_name:  String,
    pub middle_name: String,
    pub last_name:   String,
    pub email:       String,
    pub phone:       String,
    pub mobile:      String,
    pub is_agree:    bool,
    pub address:     String,
    pub created:     chrono::NaiveDateTime,
    pub tokens:      String,
} 
#[derive(Deserialize, Serialize, Debug)]
pub struct SuggestRespData {
    pub data: Vec<SuggestItem>,
    pub next: i64,
}
pub async fn get_new_applications(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<SuggestItem>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_new_applications/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<SuggestRespData>(url, _request_user.uuid.clone()).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<SuggestItem> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)] 
        #[template(path = "admin/get_new_applications.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<SuggestItem>,
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn get_approved_applications(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<SuggestItem>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_approved_applications/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<SuggestRespData>(url, _request_user.uuid.clone()).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<SuggestItem> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)] 
        #[template(path = "admin/get_approved_applications.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<SuggestItem>,
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn get_rejected_applications(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<SuggestItem>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_rejected_applications/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<SuggestRespData>(url, _request_user.uuid.clone()).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            (object_list, next_page) = (data.data, data.next);
        }
        else {
            (object_list, next_page) = (Vec::new(), 0);
        }
        let mut list: Vec<SuggestItem> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }

        #[derive(TemplateOnce)] 
        #[template(path = "admin/get_rejected_applications.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<SuggestItem>,
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
        crate::views::auth_page(session.clone()).await
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct AuthRespData {
    pub data: Vec<AuthResp>,
    pub next: i64, 
}
pub async fn users_list_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) { 
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_users/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid.clone()).await;
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
        crate::views::auth_page(session.clone()).await
    }
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Holder { 
    pub id:      i32,
    pub address: String,
    pub count:   i16,
    pub stage:   String,
    pub count2:  String,
}
#[derive(Debug, Deserialize, Serialize)]
pub struct HolderRespData {
    pub data: Vec<Holder>,
    pub next: i64,
}
pub async fn holders_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    let page = crate::utils::get_page(&req);
    let object_list: Vec<Holder>;
    let next_page: i64;
    let url = URL.to_string() + &"/get_holders/?page=".to_string() + &page.to_string();
    let resp = crate::utils::request_get::<HolderRespData>(url, "".to_string()).await;
    if resp.is_ok() { 
        let data = resp.expect("E.");
        (object_list, next_page) = (data.data, data.next);
    }
    else {
        (object_list, next_page) = (Vec::new(), 0);
    }
    let mut list: Vec<Holder> = Vec::new();
    for object in object_list.into_iter() {
        list.push(object);
    }

    if is_signed_in(&session) { 
        let _request_user = get_current_user(&session).expect("E.");

        #[derive(TemplateOnce)]
        #[template(path = "admin/holders.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<Holder>,
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
        #[derive(TemplateOnce)]
        #[template(path = "admin/anon_holders.stpl")]
        struct Template {
            object_list:  Vec<Holder>,
            next_page:    i64,
        }
        let body = Template {
            object_list:  list,
            next_page:    next_page,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
}
pub async fn admins_list_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_admins/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid.clone()).await;
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn banned_users_list_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_banned_users/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid.clone()).await;
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn banned_admins_list_page(req: HttpRequest, session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return admin_profile_page(session.clone()).await;
        }
        let page = crate::utils::get_page(&req);
        let object_list: Vec<AuthResp>;
        let next_page: i64;
        let url = URL.to_string() + &"/get_banned_admins/?page=".to_string() + &page.to_string();
        let resp = crate::utils::request_get::<AuthRespData>(url, _request_user.uuid.clone()).await;
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
        crate::views::auth_page(session.clone()).await
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct SendSubscribeMailJson {
    pub email: String,
}
pub async fn subscribe(session: Session, data: Json<SendSubscribeMailJson>) -> actix_web::Result<HttpResponse> {
    let res = crate::utils::request_post::<SendSubscribeMailJson, ()> (
        URL.to_owned() + &"/subscribe/".to_string(),
        &data,
        "".to_string()
    ).await;
    return match res {
        Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
        Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
    };
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}


#[derive(Deserialize, Serialize, Debug)]
pub struct SendMailJson {
    pub subtitle:   String,
    pub text:       String,
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
}
pub async fn send_mail(session: Session, data: Json<SendMailJson>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = SendMailJson {
            subtitle: data.subtitle.clone(),
            text: data.text.clone(),
            first_name: data.first_name.clone(),
            last_name: data.last_name.clone(),
            email: data.email.clone(),
        };
        let _request_user = get_current_user(&session).expect("E.");
        let res = crate::utils::request_post::<SendMailJson, ()> (
            URL.to_owned() + &"/send_mail/".to_string(),
            &l_data,
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}

#[derive(Deserialize, Serialize, Debug)]
pub struct ItemId {
    pub id:  i32,
}
pub async fn block_user(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/block_user/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn delete_holder(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        //if _request_user.perm < 60 {
        //    return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        //}
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/delete_holder/".to_string(),
            &data, 
            _request_user.uuid
        ).await; 

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn unblock_user(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/unblock_user/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn block_admin(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/block_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn unblock_admin(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/unblock_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn create_admin(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/create_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}
pub async fn drop_admin(session: Session, data: Json<ItemId>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let l_data = ItemId {
            id: data.id,
        };
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<ItemId, ()> (
            URL.to_owned() + &"/drop_admin/".to_string(),
            &l_data, 
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}


#[derive(Serialize, Deserialize, Debug)]
pub struct Wallet {
    pub id:        i32,
    pub tokens:    String,
    pub ico_stage: i16,
}
pub async fn agree_application(session: Session, data: Json<Wallet>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        if _request_user.perm < 60 {
            return Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err"));
        }
        let res = crate::utils::request_post::<Wallet, ()> (
            URL.to_owned() + &"/agree_application/".to_string(),
            &data,
            _request_user.uuid
        ).await; 

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}

#[derive(Debug, Deserialize, Serialize)]
pub struct NewSuggestJson {
    pub phone:    String, 
    pub mobile:   String,
    pub is_agree: String,
    pub address:  String,
    pub tokens:   String,
}
pub async fn create_suggest_item(session: Session, data: Json<NewSuggestJson>) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        let res = crate::utils::request_post::<NewSuggestJson, ()> (
            URL.to_owned() + &"/create_suggest_item/".to_string(),
            &data,
            _request_user.uuid
        ).await;

        return match res {
            Ok(user) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok")),
            Err(_) => Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("err")),
        }
    }
    Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body("ok"))
}

pub async fn admin_home_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        //crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_home2_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}

#[derive(Deserialize, Serialize, Debug)]
pub struct SmallUsers {
    pub users: Vec<SmallUser>,
} 

pub async fn admin_profile_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
        let object_list: Vec<SmallUser>;
        let url = URL.to_string() + &"/get_small_users/".to_string();
        let resp = crate::utils::request_get::<SmallUsers>(url, _request_user.uuid.clone()).await;
        if resp.is_ok() { 
            let data = resp.expect("E.");
            object_list = data.users;
        }
        else {
            object_list = Vec::new();
        }
        let mut list: Vec<SmallUser> = Vec::new();
        for object in object_list.into_iter() {
            list.push(object);
        }
        #[derive(TemplateOnce)]
        #[template(path = "admin/profile.stpl")]
        struct Template {
            request_user: AuthResp2,
            object_list:  Vec<SmallUser>,
        }
        let body = Template {
            request_user: _request_user,
            object_list:  list,
        }
        .render_once()
        .map_err(|e| InternalError::new(e, StatusCode::INTERNAL_SERVER_ERROR))?;
        Ok(HttpResponse::Ok().content_type("text/html; charset=utf-8").body(body))
    }
    else {
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_wallets_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_setting_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_transactions_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_gainers_losers_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_market_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_stats_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_ico_distribution_countdown_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_ico_roadmap_timeline_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_ico_progress_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_ico_details_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_ico_listing_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_ico_filter_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}

pub async fn admin_tickers_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_tickers_live_pricing_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_transactions_tables_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_transaction_search_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_transaction_details_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_transactions_counter_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_support_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}

pub async fn admin_invoice_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}
pub async fn admin_invoices_list_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}

pub async fn exchange_page(session: Session) -> actix_web::Result<HttpResponse> {
    if is_signed_in(&session) {
        let _request_user = get_current_user(&session).expect("E.");
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
        crate::views::auth_page(session.clone()).await
    }
}