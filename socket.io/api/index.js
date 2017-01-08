const { CLIENT_SIDE_DEFAULT } = require('./constants');
const gameController = require('./gameController');

const io = require('socket.io')();
io.listen(5000);
console.log('💻 listening on 5000');

setInterval(function () {
  gameController.update();
  io.emit('update', gameController.getGameInfo());
}, 1000 / 60);

io.on('connection', socket => {
  console.log(`User ${socket.id} connected`);

  socket.emit('rule', CLIENT_SIDE_DEFAULT);
  socket.emit('update', gameController.getGameInfo());

  socket.on('userRequest', isUser1 => {
    gameController.setUser(socket.id, isUser1);
  });

  socket.on('changeDir', dir => {
    gameController.setPaddleDir(socket.id, dir);
  });

  socket.on('disconnect', () => {
    gameController.removeUser(socket.id);
  });
});
