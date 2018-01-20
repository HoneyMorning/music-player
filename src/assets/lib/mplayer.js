class MPlayer {
  constructor(id) {
    this.audio = document.getElementById(id);
    this.initEventListener();
    this.progress = {
      currentTime: 0,
      totalTime: 0,
      percent: 0,
    };
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
      self.progressListener();

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
      progressID = requestAnimationFrame(playingProgress);
    }

    function pause() {
      console.warn('Paused');
      cancelAnimationFrame(progressID);
    }

    this.audio.addEventListener('loadedmetadata', loadedmetadata, false);
    this.audio.addEventListener('playing', playing, false);
    this.audio.addEventListener('pause', pause, false);
  }

  progressListener() {
    // guangbo
    console.warn('Playing --- ', this.progress);
  }
}

export default MPlayer;
