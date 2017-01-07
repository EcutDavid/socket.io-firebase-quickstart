const io = require('socket.io')();
const fs = require('fs');

io.listen(5000);
console.log('💻 listening on 5000');
