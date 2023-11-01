console.log('Loading function');
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
const ses = new SESClient({ region: "sa-east-1" });
export const handler = async (event) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    for (const { messageId, body } of event.Records) {
        let MainBody = JSON.parse(body);
        const params = new SendEmailCommand({
            Source: 'noreply@wechain.com.br', // Replace with your SES verified sender email
            Destination: {
                ToAddresses: [MainBody.email], // Get recipient from SQS message
            },
            Message: {
                Subject: {
                    Data: MainBody.subject,
                },
                Body: {
                    Text: {
                        Data: MainBody.body,
                    },
                },
            },
        });
        const result = await ses.send(params);
        console.log('Email sent:', result);
        console.log('SQS message %s: %j', messageId, `Email: ${MainBody.email}, Subject: ${MainBody.subject}, Message: ${MainBody.body}`);
    }
    return `Successfully processed ${event.Records.length} messages.`;
};