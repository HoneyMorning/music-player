import React from 'react';
import MPlayer from '../assets/lib/mplayer';
import Progress from './Progress';
import music from '../assets/audio/Hymn-For-The-Weekend.mp3';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      currentProgress: 0,
    };
  }

  componentDidMount() {
    this.initPlayer();
  }

  initPlayer() {
    const audio = new MPlayer('audio');
    console.warn(this.state.duration);
    audio.progressListener((progress) => {
      console.warn('=================');
      console.warn(progress);
    });
  }

  render() {
    return (
      <section>
        <audio id="audio" controls>
          <source src={music} />
          <track kind="captions" />
        </audio>

        <Progress progress={this.state.duration} currentProgress={this.state.currentProgress} />
      </section>
    );
  }
}

export default Player;
