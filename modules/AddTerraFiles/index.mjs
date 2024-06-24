import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
var ses = new SESClient({ region: "us-east-1" }); // Change here your region

export const handler = async (event) => {
  const eventData = JSON.parse(event.body);

  const email = eventData.email;
  const name = eventData.name;
  const message = eventData.message;

  const emailBody = `Hello,\n\nYou have received a new message via the 
    contact form on your website. Below are the details of the message:
    \n\n**Sender Information:**\n- Name: ${name}\n- Email: ${email}\n\n
    **Message:**\n${message}\n\nPlease respond to this message at your 
    earliest convenience.`;

  const command = new SendEmailCommand({
    Destination: {
      //Change here your destination email address
      ToAddresses: ["tudor.seserman@gmail.com"],
    },
    Message: {
      Body: {
        Text: { Data: emailBody },
      },

      Subject: { Data: "New Message from Contact Form" },
    },
    Source: "tudor.seserman@gmail.com", //Add here your source email address
  });

  try {
    let response = await ses.send(command);

    response = {
      statusCode: 200,
      headers: {
        //Change here the URL where your frontend app is running:
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    };

    return response;
  } catch (error) {
    console.error("Error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Hit this error" }),
    };
  }
};
