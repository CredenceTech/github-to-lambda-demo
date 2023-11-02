'use strict';

console.log('Loading function');

module.exports.handler = async (event) => {
    //console.log('Testing');
    //console.log('Received event:', JSON.stringify(event, null, 2));
    // for (const { messageId, body } of event.Records) {
    //     console.log('SQS message %s: %j', messageId, body);
    //     console.log('Testing');
    // }
    // return `Successfully processed ${event.Records.length} messages.`;
    return `Testing Successfully processed  messages.`;
};

// export const handler = async (event) => {
//     //console.log('Received event:', JSON.stringify(event, null, 2));
//     for (const { messageId, body } of event.Records) {
//         console.log('SQS message %s: %j', messageId, body);
//         console.log('Testing');
//     }
//     return `Successfully processed ${event.Records.length} messages.`;
// };

// module.exports.helloworld = async (event,context,callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: printHelloWorld(),
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// callback(null,response)
// };
// function printHelloWorld(){
//   return "Hello World";
// }
// module.exports.printHelloWorld=printHelloWorld;
