import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div>
        <h2>Select a song</h2>
      </div>
    )
  }

  return (
    <div>
      <h2>Song Detail</h2>
      <p>Title: {song && song.title}</p>
      <p>Duration: {song && song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);