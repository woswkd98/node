const Buyer = require('../model/buyerModel')



let io = null;
let http = null;

let LoginedBuyers = [];


module.exports = {
    socketConnection : (app) => {
      http =  require('http').createServer(app);
      io = require('socket.io')(http);
      return http;
    },
}


