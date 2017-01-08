import React from 'react';
import Header from './Header';
import GameBoard from './GameBoard';
import socketIO from 'socket.io-client';
import 'styles/main.scss';

const io = socketIO('localhost:5000');

// get width and height from server init loading
export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        <Header socket={io} />
        <GameBoard socket={io} />
      </div>
    );
  }
}
