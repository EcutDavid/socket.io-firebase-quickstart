import React from 'react';

import 'styles/header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1 className="">
          Pong
        </h1>
        <div className='btn-container'>
          <button className='button' disabled={false}>Play as user1</button>
          <button className='button'>Play as user2</button>
        </div>
      </div>
    );
  }
}
