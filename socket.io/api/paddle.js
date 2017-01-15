const {
  PADDLE_MARGIN_X,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  BOARD_WIDTH,
  BOARD_HEIGHT
} = require('./constants');

class Paddle {
  constructor(isLeft) {
    this.reset(isLeft);
  }

  reset(isLeft) {
    this.posX = isLeft ? PADDLE_MARGIN_X : (BOARD_WIDTH - PADDLE_WIDTH - PADDLE_MARGIN_X);
    this.posY = (BOARD_HEIGHT - PADDLE_HEIGHT) / 2;
    this.isUp = false;
    this.isDown = false;
    this.isLeft = isLeft;
  }
}

module.exports = Paddle;
