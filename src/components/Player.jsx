import React from 'react';
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
    const audio = document.getElementById('audio');
    const self = this;

    function loadedMetadata() {
      const { duration } = audio;

      self.setState({
        duration,
      });
    }

    function playAnimation() {
      const total = self.state.duration;
      const current = self.state.currentProgress;

      console.warn(current);
      console.warn(total);

      // while (current < (total * 1000)) {
      //   current += 1000;
      //   self.setState({
      //     currentProgress: Math.floor(current / 1000),
      //   });
      //   playAnimation();
      //   console.warn('1');
      // }
    }

    function playing(e) {
      console.warn(e.timeStamp);
      playAnimation();
    }

    audio.addEventListener('playing', playing, false);
    audio.addEventListener('loadedmetadata', loadedMetadata, false);
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
