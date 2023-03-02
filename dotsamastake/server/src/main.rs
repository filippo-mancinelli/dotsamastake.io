use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use serde::Deserialize;
use actix_cors::Cors;

mod email;

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/submit")]
async fn submit(data: web::Json<EmailData>) -> impl Responder {
    println!("data: {}"data);
    let result = email::send_email(&data.into_inner()).await;   //into_inner() deserializes the actix JSON object

    // Return a JSON response indicating whether the email was sent successfully
    match result {
        Ok(()) => HttpResponse::Ok().json("Email sent successfully"),
        Err(_) => HttpResponse::InternalServerError().json("Failed to send email"),
    }
}

let cors = Cors::default()
    .allow_any_origin()
    .allow_any_method()
    .allow_any_header();

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .wrap(cors)
            .service(hello)
            .service(submit)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}