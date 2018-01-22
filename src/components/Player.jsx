import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import MPlayer from '../assets/lib/mplayer';
import PlayerList from './PlayerList';
import PlayerCard from './PlayerCard';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      current: 0,
      playing: false,
    };

    this.audio = null;
    this.progressID = null;
    this.handlePlay = this.handlePlay.bind(this);
    this.playingProgress = this.playingProgress.bind(this);
    this.cardItem = {
      cover: 'src/assets/images/avator.jpeg',
      name: 'Music name',
      src: 'src/assets/audio/Hymn-For-The-Weekend.mp3',
    };
  }

  componentDidMount() {
    this.audio = new MPlayer('audio');
  }

  playingProgress() {
    this.setState({
      duration: this.audio.progress.totalTime,
      current: this.audio.progress.currentTime,
    });

    if (this.audio.progress.currentTime < this.audio.progress.totalTime) {
      this.progressID = window.requestAnimationFrame(this.playingProgress);
    }
  }

  handlePlay() {
    const { playing } = this.state;

    if (playing) {
      // stop
      this.audio.pause();
      window.cancelAnimationFrame(this.progressID);
    } else {
      // play
      this.audio.play();
      this.progressID = window.requestAnimationFrame(this.playingProgress);
    }

    this.setState({
      playing: !playing,
    });
  }

  render() {
    return (
      <section style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <PlayerCard
              cardItem={this.cardItem}
              handlePlay={this.handlePlay}
              playing={this.state.playing}
              duration={this.state.duration}
              current={this.state.current}
            />
          </div>

          <div className="col-lg-8 col-md-12">
            <PlayerList />
          </div>
        </div>
      </section>
    );
  }
}

export default Player;
