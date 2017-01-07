

const routeHandlers = require('./route_handlers');

const router = require('koa-router')(),
      koaBody = require('koa-body')();
    
module.exports.routeRegistry = function (){

    router.get('/', routeHandlers.indexPage)
          .post('/produce-messages', koaBody, routeHandlers.produceMessages);

    return router.routes();
}
