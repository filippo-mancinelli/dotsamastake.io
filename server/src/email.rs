use lettre::message::header::ContentType;
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use serde::{Deserialize, Serialize};
use dotenv::dotenv;
use std::env;

#[derive(Debug, Deserialize, Serialize)]
pub struct EmailData {
    pub name: String,
    pub email: String,
    pub message: String
}

pub fn send_email(data: &EmailData) -> Result<(), String> {
    //load environment variables
    dotenv().ok();

    let email = Message::builder()
        .from(format!("{}, <{}>", &data.name, &data.email).parse().unwrap())
        .to("Dotsamastake <node@dotsamastake.io>".parse().unwrap())
        .subject(format!("New message from {}, {}", &data.name, &data.email))
        .header(ContentType::TEXT_PLAIN)
        .body(data.message.to_string())
        .unwrap();

    //create credentials struct
    let creds = Credentials::new(env::var("EMAIL").unwrap().to_owned(), env::var("PASSWORD").unwrap().to_owned());

    //open remote connection to gmail
    let transport = SmtpTransport::relay("smtp.gmail.com")
        .unwrap()
        .credentials(creds)
        .build();

    // send email
    match transport.send(&email) {
        Ok(_) => println!("Email sent succesfully."),
        Err(e) => panic!("Could not send email: {e:?}"),
    }

    Ok(())
}
