const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 400;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 60;
const PADDLE_MARGIN_X = 10;
const BALL_RADIUS = 10;
const PADDLE_SPEED = 11;

const CLIENT_SIDE_DEFAULT = {
  board: {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT
  },
  paddle: {
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT
  },
  ball: {
    radius: BALL_RADIUS
  }
};

module.exports = {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_MARGIN_X,
  BALL_RADIUS,
  CLIENT_SIDE_DEFAULT,
  PADDLE_SPEED
};
