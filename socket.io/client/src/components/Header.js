import React from 'react';

import 'styles/header.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { hasUser1: true, hasUser2: true, requestSent: false };
  }

  componentWillMount() {
    this.props.socket.on('update', ({userInfo}) => {
      this.setState({
        hasUser1: userInfo.user1.hasPlayer,
        hasUser2: userInfo.user2.hasPlayer
      });
    });
  }

  sendRequest(isUser1) {
    const {socket} = this.props;

    socket.emit('userRequest', isUser1);
    this.setState({ requestSent: true });

    document.addEventListener('keydown', e => {
      const KEY_UP = 38;
      const KEY_DOWN = 40;
      const { hasUser1, hasUser2 } = this.state;
      if ((isUser1 && hasUser1) || (!isUser1 && hasUser2)) {
        if (e.keyCode === KEY_UP) {
          socket.emit('changeDir', 'up');
        } else if (e.keyCode === KEY_DOWN) {
          socket.emit('changeDir', 'down');
        }
      }
    });
    document.addEventListener('keyup', () => {
      const { hasUser1, hasUser2 } = this.state;
      if ((isUser1 && hasUser1) || (!isUser1 && hasUser2)) {
        socket.emit('changeDir', '');
      }
    });
  }

  render() {
    const { hasUser1, hasUser2, requestSent } = this.state;

    return (
      <div className='header'>
        <h1 className="">
          Pong
        </h1>
        <div className='btn-container'>
          <button
            className='button'
            disabled={hasUser1}
            onClick={this.sendRequest.bind(this, true)}
            style={{ visibility: requestSent ? 'hidden' : '' }}
          >
            Play as user1
          </button>
          <button
            className='button'
            disabled={hasUser2}
            onClick={this.sendRequest.bind(this, false)}
            style={{ visibility: requestSent ? 'hidden' : '' }}
          >
            Play as user2
          </button>
        </div>
      </div>
    );
  }
}
