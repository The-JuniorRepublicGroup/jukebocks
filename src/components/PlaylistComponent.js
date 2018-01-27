import React, { Component } from 'react';
import App from '../App.js';

class Playlist extends Component {
  render() {
    return (
          <div  >
              {/* <img/> */}
              <h3>Playlist Name</h3>
              <ul>
                <li>Song 1</li>
                <li>Song 2</li>
                <li>Song 3</li>
              </ul>
          </div>
    );
  }
}

export default Playlist;
