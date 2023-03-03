use lettre::message::header::ContentType;
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct EmailData {
    pub name: String,
    pub email: String,
    pub message: String
}

pub fn send_email(data: &EmailData) -> Result<(), String> {
    // create email
    let email = Message::builder()
        .from(format!("{}, <{}>", &data.name, &data.email).parse().unwrap())
        .to("Dotsamastake <node@dotsamastake.io>".parse().unwrap())
        .subject("New message from {}", &data.name)
        .header(ContentType::TEXT_PLAIN)
        .body(data.message.to_string())
        .unwrap();

    //create credentials struct
    let creds = Credentials::new("andreasdfg02@gmail.com".to_owned(), "benetti1".to_owned());

    // create transport
    let transport = SmtpTransport::relay("smtp.gmail.com")
        .map_err(|_| "Failed to connect to SMTP server")?
        .credentials(creds)
        .build();

    // send email
    transport.send(&email).map_err(|_| "Failed to send email")?;

    Ok(())
}
