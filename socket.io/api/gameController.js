const {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  BALL_RADIUS,
  PADDLE_SPEED
} = require('./constants');
const Ball = require('./ball');
const Paddle = require('./paddle');

class GameController {
  constructor() {
    this.ball = new Ball();
    this.paddles = [new Paddle(true), new Paddle(false)];
    this.user1 = { isUp: false, isDown: false, userID: undefined };
    this.user2 = { isUp: false, isDown: false, userID: undefined };
  }

  getGameInfo() {
    return {
      ball: {
        posX: this.ball.posX,
        posY: this.ball.posY
      },
      paddles: this.paddles,
      userInfo: {
        user1: {hasPlayer: !!this.user1.userID},
        user2: {hasPlayer: !!this.user2.userID}
      }
    };
  }

  checkIsUsersReady() {
    return this.user1.userID && this.user2.userID;
  }

  setUser(id, isUser1) {
    if (isUser1) {
      return this.user1.userID = id;
    }
    this.user2.userID = id;
  }

  removeUser(id) {
    [this.user1, this.user2].forEach((d, i) => {
      if (d.userID === id) {
        d.userID = undefined;
        this.paddles[i].isDown = false;
        this.paddles[i].isUp = false;
      }
    });
  }

  setPaddleDir(userID, dir) {
    [this.user1, this.user2].forEach((d, i) => {
      if (d.userID === userID) {
        this.paddles[i].isDown = dir === 'down';
        this.paddles[i].isUp =  dir === 'up';
      }
    });
  }

  update() {
    if (this.checkIsUsersReady()) {
      this.ball.posX += this.ball.speedX;
      this.ball.posY += this.ball.speedY;
    }

    if (this.ball.posX < -BALL_RADIUS) {
      this.ball.reset();
    }
    if (this.ball.posX > (BOARD_WIDTH + BALL_RADIUS)) {
      this.ball.reset();
    }

    if (this.ball.posY < BALL_RADIUS) {
      this.ball.posY = BALL_RADIUS;
      this.ball.speedY *= -1;
    }
    if (this.ball.posY > (BOARD_HEIGHT - BALL_RADIUS)) {
      this.ball.posY = BOARD_WIDTH - BALL_RADIUS;
      this.ball.speedY *= -1;
    }

    this.paddles.forEach(d => {
      d.posY += d.isDown ? PADDLE_SPEED : 0;
      d.posY -= d.isUp ? PADDLE_SPEED : 0;

      if (d.posY < 0) {
        d.posY = 0;
      }

      if (d.posY > (BOARD_HEIGHT - PADDLE_HEIGHT)) {
        d.posY = BOARD_HEIGHT - PADDLE_HEIGHT;
      }

      if (((d.posY - BALL_RADIUS) < this.ball.posY) &&
        ((d.posY + PADDLE_HEIGHT + BALL_RADIUS) > this.ball.posY)) {
          // If paddle is on left side, then the collision panel should be d.x + paddleWidth
          if (d.isLeft) {
            if ((d.posX + PADDLE_WIDTH + BALL_RADIUS) > this.ball.posX) {
              this.ball.posX = (d.posX + PADDLE_WIDTH + BALL_RADIUS);
              this.ball.speedX *= -1;
            }
          } else {
            if ((d.posX - BALL_RADIUS) < this.ball.posX) {
              this.ball.posX = d.posX - BALL_RADIUS;
              this.ball.speedX *= -1;
            }
          }
      }
    });
  }
}

module.exports = new GameController();
