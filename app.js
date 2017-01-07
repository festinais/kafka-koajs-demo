

const app = require('koa')();
const routes = require('./server/routes');
const kafka = require('./server/kafka_consumer');
    
app.use(routes.routeRegistry());

kafka.messageConsumer();
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
