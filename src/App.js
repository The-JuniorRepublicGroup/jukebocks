import React, { Component } from 'react';
import './App.css';


let defaultTextColor = "#fff"
let defaultStyle = {
  color: defaultTextColor,
};

const fakeServerData = {
  user: {
    name: 'Junior',
    playlists: [
      {
        name: 'PlayList 1',
        songs: [
          {
            name: 'Beat it',
            artist: 'Michael Jackson',
            duration: 12345,
          },
          {
            name: 'Canneloni Makroni',
            artist: 'Somebody',
            duration: 14344,
          },
          {
            name: 'Rose helicopter',
            artist: 'Somebody White',
            duration: 23545,
          }
        ],
      },

      {
        name: 'PlayList sppotty 2',
        songs: [
          {
            name: 'Beat it',
            artist: 'Michael Jackson',
            duration: 12345,
          },
          {
            name: 'Canneloni Makroni',
            artist: 'Somebody',
            duration: 14344,
          },
          {
            name: 'Rose helicopter',
            artist: 'Somebody White',
            duration: 23545,
          }
        ],
      },
      {
        name: 'PlayList 3',
        songs: [
          {
            name: 'Beat it',
            artist: 'Michael Jackson',
            duration: 12345,
          },
          {
            name: 'Canneloni Makroni',
            artist: 'Somebody',
            duration: 14344,
          },
          {
            name: 'Rose helicopter',
            artist: 'Somebody White',
            duration: 23545,
          }
        ],
      },
      {
        name: 'PlayList 4',
        songs: [
          {
            name: 'Beat it',
            artist: 'Michael Jackson',
            duration: 12345,
          },
          {
            name: 'Canneloni Makroni',
            artist: 'Somebody',
            duration: 14344,
          },
          {
            name: 'Rose helicopter',
            artist: 'Somebody White',
            duration: 23545,
          }
        ],
      },
    ],
  },
};

class Aggregate extends Component {
  render(){
    return (
    <div style={{...defaultStyle, width: '40%', display: 'inline-block'}} className="aggregate">
      <h2 >{this.props.playlists && this.props.playlists.length} Songs Coming Up</h2>
    </div>
    );
  }
}

class HoursCounter extends Component {
  render(){

    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    } , [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0);

    return (
    <div style={{...defaultStyle, width: '40%', display: 'inline-block'}} className="aggregate">
      <h2 >{Math.round(totalDuration/60)} Hours</h2>
    </div>
    );
  }
}

class Filter extends Component {
  render(){
    return(
      <div style={defaultStyle} >
        {/* <img/> */}
        <input type="text" onKeyUp={event => 
            this.props.onTextChange(event.target.value) } />
        
      </div>
    );
  }
}


class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: "inline-block", width:"25%"}} >
        {/* <img/> */}
        <h3>{this.props.playlist.name}</h3>
        <ul>
          {this.props.playlist.songs.map(song => 
            <li>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      serverData: {},
      filterString: ''

    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeServerData});      
    }, 1000);
  }

  render() {
    
    let green = 'green'
    let headStyle = {color: green, 'font-size':'60px'}
    return (
      <div className="App">
        {this.state.serverData.user ?
            <div>
            <h1 style={headStyle}>
              {this.state.serverData.user.name}'s Playlist
            </h1>
          }
              <Aggregate playlists={
                  this.state.serverData.user.playlists}/>
              <HoursCounter playlists={
                  this.state.serverData.user.playlists}/> 
          <Filter onTextChange={text => this.setState({filterString: text})} />

          {this.state.serverData.user.playlists.filter(playlist =>
            playlist.name.toLowerCase().includes(
              this.state.filterString.toLowerCase())
          ).map(playlist => 
            <Playlist playlist={playlist} />
          )}

        </div> : <h1 style={defaultStyle} >Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
