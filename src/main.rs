use actix_web::{
    App,
    HttpServer,
    web,
};

mod views;
mod routes;
mod errors;

use crate::views::not_found_page;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    use crate::routes::routes;
    use actix_files::Files;
    use std::time::Duration;
    //use actix_cors::Cors;
    use actix_extensible_rate_limit::{
        backend::{
            SimpleInputFunctionBuilder,
            memory::InMemoryBackend,
        },
        RateLimiter,
    };
    let limit_backend = InMemoryBackend::builder().build();

    HttpServer::new(move || { 
        let _files = Files::new("/assets", "assets/").show_files_listing();
        let limit_input = SimpleInputFunctionBuilder::new(Duration::from_secs(1), 5)
            .real_ip_key()
            .build();
        let limit_middleware = RateLimiter::builder(limit_backend.clone(), limit_input)
            .add_headers()
            .build();

        App::new()  
            //.wrap(limit_middleware) 
            .default_service(web::route().to(not_found_page))
            .service(_files)
            .configure(routes)
    }) 
    .bind("69.167.186.207:9999")?   // prod
    .run()
    .await
} 