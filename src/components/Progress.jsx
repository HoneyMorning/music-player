import React from 'react';
import PropTypes from 'prop-types';

function Progress(props) {
  const { progress, currentProgress } = props;

  function changeProgress() {
    console.warn(this);
  }

  return (
    <div className="progress" style={{ marginTop: '20px' }} onClick={changeProgress} tabIndex={0} role="button" >
      <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: currentProgress, textAlign: 'right' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
        {`${progress}s`}
      </div>
    </div>
  );
}

Progress.propTypes = {
  progress: PropTypes.number.isRequired,
  currentProgress: PropTypes.number.isRequired,
};

export default Progress;
