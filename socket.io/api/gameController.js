const {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_MARGIN_X,
  BALL_RADIUS
} = require('./constants');

class GameController {
  constructor() {
    this.ball = this.resetBall();
  }

  getGameInfo() {
    return {
      ball: {
        posX: this.ball.posX,
        posY: this.ball.posY
      },
      paddles: [{
        posX: PADDLE_MARGIN_X,
        posY: (BOARD_HEIGHT - PADDLE_HEIGHT) / 2
      }, {
        posX: BOARD_WIDTH - PADDLE_WIDTH - PADDLE_MARGIN_X,
        posY: (BOARD_HEIGHT - PADDLE_HEIGHT) / 2
      }]
    };
  }

  resetBall() {
    return {
      posX: BOARD_WIDTH / 2,
      posY: BOARD_HEIGHT / 2,
      speedX: (5 + Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1),
      speedY: (5 + Math.random() * 5) * (Math.random() > 0.5 ? 1 : -1)
    };
  }

  update() {
    this.ball.posX += this.ball.speedX;
    this.ball.posY += this.ball.speedY;

    if (this.ball.posX < BALL_RADIUS) {
      this.ball.posX = BALL_RADIUS;
      this.ball.speedX *= -1;
    }
    if (this.ball.posX > (BOARD_WIDTH - BALL_RADIUS)) {
      this.ball.posX = BOARD_WIDTH - BALL_RADIUS;
      this.ball.speedX *= -1;
    }

    if (this.ball.posY < BALL_RADIUS) {
      this.ball.posY = BALL_RADIUS;
      this.ball.speedY *= -1;
    }
    if (this.ball.posY > (BOARD_HEIGHT - BALL_RADIUS)) {
      this.ball.posY = BOARD_WIDTH - BALL_RADIUS;
      this.ball.speedY *= -1;
    }
  }
}

module.exports = new GameController();
