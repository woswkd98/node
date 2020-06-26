
let io = null;
let http = null;





let chatUserIndex = [[]];


module.exports = {
    socketConnection : (app) => {
      http =  require('http').createServer(app);
      io = require('socket.io')(http);
      
      // 유저가 로그인 상태인지 확인

      io.on('connection', (data) => {
        

      })

      return http;
    },





}

