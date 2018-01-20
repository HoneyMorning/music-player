import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import MPlayer from '../assets/lib/mplayer';
import Progress from './Progress';
import music from '../assets/audio/Hymn-For-The-Weekend.mp3';
import logo from '../assets/images/avator.jpeg';
import PlayerList from './PlayerList';

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

    if (playing) { // stop
      this.audio.pause();
      window.cancelAnimationFrame(this.progressID);
    } else { // play
      this.audio.play();
      this.progressID = window.requestAnimationFrame(this.playingProgress);
    }

    this.setState({
      playing: !playing,
    });
  }

  render() {
    return (
      <section style={{ marginTop: '40px' }}>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <img src={logo} style={{ height: '240px' }} alt="Logo" />
              <div className="card-body">
                <h5 className="card-title">Music name</h5>
                <audio id="audio">
                  <source src={music} />
                  <track kind="captions" />
                </audio>
                <button className="btn btn-dark" onClick={this.handlePlay}>{this.state.playing ? <i className="fa fa-stop" /> : <i className="fa fa-play" />}</button>
              </div>
            </div>
          </div>

          <PlayerList />
        </div>

        <Progress duration={this.state.duration} current={this.state.current} />
      </section>
    );
  }
}

export default Player;
