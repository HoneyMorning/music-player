import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import MPlayer from '../assets/lib/mplayer';
import Progress from './Progress';
import music from '../assets/audio/Hymn-For-The-Weekend.mp3';
import logo from '../assets/images/avator.jpeg';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      currentProgress: 0,
      playing: false,
    };

    this.audio = null;
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {
    this.audio = new MPlayer('audio');
    this.initPlayer();
  }

  initPlayer() {
    this.audio.progressListener((progress) => {
      console.warn('=================');
      console.warn(progress);
    });
  }

  handlePlay() {
    const { playing } = this.state;

    if (playing) { // stop
      this.audio.pause();
    } else { // play
      this.audio.play();
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

          <div className="col-lg-8 col-md-12">
            <main>
              <div className="card">
                <div className="card-header">Music List</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">黄昏</li>
                  <li className="list-group-item">明天，你好</li>
                  <li className="list-group-item">海阔天空</li>
                </ul>
              </div>
            </main>
          </div>
        </div>

        <Progress progress={this.state.duration} currentProgress={this.state.currentProgress} />
      </section>
    );
  }
}

export default Player;
