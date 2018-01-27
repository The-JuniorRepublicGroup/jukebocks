import React, { Component } from 'react';
import App from '../App.js'

class Aggregate extends Component {
  render() {
    return (
          <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }} className="aggregate">
              <h2 >{this.props.playlists && this.props.playlists.length} Text</h2>
            </div>
    );
  }
}

export default Aggregate;
