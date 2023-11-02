const { handler } = require('../index');

// Example event object (simulating an SQS event)
const sampleEvent = {
  Records: [
    {
      messageId: '1',
      body: 'Sample message 1',
    },
    {
      messageId: '2',
      body: 'Sample message 2',
    },
  ],
};


test('correct greeting is generated', () => {
  expect(handler(sampleEvent)
    .then((result) => {
      console.log('Lambda function result:', result);
    })
    .catch((error) => {
      console.error('Lambda function error:', error);
    }));
});

// Invoke the Lambda function handler with the sample event

