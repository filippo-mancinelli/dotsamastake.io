use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use actix_governor::{Governor, GovernorConfigBuilder};
use email::EmailData;
use env_logger::Env;
use actix_web::middleware::Logger;

mod email;

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/submit")]
async fn submit(data: web::Json<EmailData>) -> impl Responder {
    //into_inner() deserializes the actix JSON object
    let result = email::send_email(&data.into_inner());   

    // Return a JSON response indicating whether the email was sent successfully
    match result {
        Ok(()) => HttpResponse::Ok().json("Email sent successfully"),
        Err(_) => HttpResponse::InternalServerError().json("Failed to send email"),
    }    
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    //logger
    env_logger::init_from_env(Env::default().default_filter_or("info"));

    // Allow bursts with up to five requests per IP address
    let governor_conf = GovernorConfigBuilder::default()
    .per_second(4)
    .burst_size(5)
    .finish()
    .unwrap();

    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .wrap(Logger::new("%a %{User-Agent}i"))
            .wrap(Governor::new(&governor_conf))
            .service(hello)
            .service(submit)
    })
    .bind(("0.0.0.0", 8080))?   //ip address is 0.0.0.0 because it is meant to run inside a docker container
    .run()
    .await
}