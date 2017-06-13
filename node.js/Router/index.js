var server = require('./server');
var router = require('./router.js');
server.start(router.route);