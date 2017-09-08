let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

const PORT = 5000;

io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});
    console.log(`message: ${message}`);    
  });
});

http.listen(PORT, () => {
  console.log('started on port 5000');
});