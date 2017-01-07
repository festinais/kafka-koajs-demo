

module.exports.messageConsumer = () => {
    var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client();
    
    consumer = new Consumer(client, [{ topic: 'test', partition: 0}]);
    consumer.on('message', function (message) {
        console.log("This message was consumed", message.value, "\n------\n");
    });      
}