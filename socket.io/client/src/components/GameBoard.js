import React from 'react';

import 'styles/gameBoard.scss';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { boardInfo: undefined, gameInfo: undefined };
  }

  componentWillMount() {
    // This is kinda of hacky, plase don't rely on attach listener in this way in prod
    this.props.socket.on('rule', boardInfo => {
      this.setState({boardInfo});
    });

    this.props.socket.on('update', gameInfo => {
      this.setState({gameInfo});
    });
  }

  render() {
    const { boardInfo, gameInfo } = this.state;
    return (boardInfo && gameInfo) ? (
      <svg
        className='game-board'
        width={boardInfo.board.width}
        height={boardInfo.board.height}
      >
      {
        gameInfo.paddles.map((d, i) => (
          <rect
            x={d.posX}
            y={d.posY}
            width={boardInfo.paddle.width}
            height={boardInfo.paddle.height}
            key={i}
          />
        ))
      }

        <circle
          cx={gameInfo.ball.posX}
          cy={gameInfo.ball.posY}
          r= {boardInfo.ball.radius}
        />
      </svg>
    ) : (
      <h2>
        Connecting server
      </h2>
    );
  }
}
