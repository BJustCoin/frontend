use argonautica::{Hasher, Verifier};
use actix_web::{
    http::header::CONTENT_TYPE,
    HttpRequest,
    web::Json,
    Error,
};
use crate::views::AuthResp;
use serde::{Serialize, Deserialize};


pub fn is_json_request(req: &HttpRequest) -> bool {
    req
      .headers()
      .get(CONTENT_TYPE)
      .map_or(
        false,
        |header| header.to_str().map_or(false, |content_type| "application/json" == content_type)
      )
}

#[derive(Serialize)]
pub struct Info {
    pub first_name: String,
    pub last_name:  String,
    pub email:      String,
    pub password:   String,
}

pub fn set_current_user(data: Json<&AuthResp>) -> () {
   //let _unwrap: AuthResp = serde_json::from_str(&data).unwrap();
   //let id = _unwrap.id.to_string();
   //web_local_storage_api::set_item(id, data)?;
} 
  
pub fn get_current_user(id: String) -> Option<AuthResp> {
    //web_local_storage_api::get_item(id)?;
    None
}