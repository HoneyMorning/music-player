class MPlayer {
  constructor(id) {
    this.audio = document.getElementById(id);
    this.initEventListener();
    this.progress = {
      currentTime: 0,
      totalTime: 0,
      percent: 0,
    };
    this.playing = false;
  }

  initEventListener() {
    const requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    const self = this;
    let progressID = null;

    function playingProgress() {
      console.warn('playing ... ');
      self.progress.currentTime = self.audio.currentTime;

      if (self.progress.currentTime < self.progress.totalTime) {
        progressID = requestAnimationFrame(playingProgress);
      }
    }

    function loadedmetadata() {
      console.warn('Loaded success');
      self.progress.totalTime = this.duration;
    }

    function playing() {
      console.warn('Playing');
      self.playing = true;
      progressID = requestAnimationFrame(playingProgress);
    }

    function pause() {
      console.warn('Paused');
      self.playing = false;
      cancelAnimationFrame(progressID);
    }

    this.audio.addEventListener('loadedmetadata', loadedmetadata, false);
    this.audio.addEventListener('playing', playing, false);
    this.audio.addEventListener('pause', pause, false);
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
}

export default MPlayer;
