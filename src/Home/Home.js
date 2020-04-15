import React from 'react';
import './Home.css'

class Home extends React.Component {
  render () {
    return (
      <div className='content'>
        <h2>Instructions</h2>
        <div className="instructions">
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </li>
          </ul>
          <ul>
            <li>
              Augue interdum velit euismod in pellentesque.
            </li>
          </ul>
          <ul>
            <li>
              Vestibulum rhoncus est pellentesque elit ullamcorper. Id aliquet risus feugiat in.
            </li>
          </ul>
        </div>
      </div>
  )}
}

export default Home;
