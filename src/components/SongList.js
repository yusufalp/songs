import React from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions/index';

class SongList extends React.Component {
  renderedList() {
    return this.props.songs.map((song, i) => {
      return (
        <div className="song" key={i}>
          <p>{song.title}</p>
          <button onClick={() => this.props.selectedSong(song)}>Select</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderedList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(
  mapStateToProps,
  { selectedSong: selectedSong })
  (SongList);