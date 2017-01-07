

module.exports.produceMessages = function* (){
    const 
        kafka = require('kafka-node'), 
        Producer = kafka.Producer, 
        client = new kafka.Client('localhost:2181'), 
        producer = new Producer(client); 


    payloads = [ { topic: 'test', messages: JSON.stringify(this.request.body), 
                partition: 0 }, ]


    producer.on('ready', function(){
        producer.send(payloads, function(err, data){
            console.log(data)
        }); 
    });

    producer.on('error', function(err){
        console.log("error");
    })

    this.body = {
        "message": "message is produced"
    }


}

module.exports.indexPage = function indexPage(){
    this.body = "service alive"
}
