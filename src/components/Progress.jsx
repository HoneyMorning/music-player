import PropTypes from 'prop-types';

function Progress({ duration, current }) {
  return (
    <div
      className="progress"
      style={{ marginBottom: '20px', justifyContent: 'space-between' }}
      tabIndex={0}
      role="button"
      aria-label="Progress"
    >
      <div
        className="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        aria-label="Audio progress"
        style={{
          width: `${(current / duration) * 100}%`,
          textAlign: 'right',
        }}
        aria-valuenow="10"
        aria-valuemin="0"
        aria-valuemax="100"
      />
      <span>{`${parseInt(current, 10)} / ${parseInt(duration, 10)} s`}</span>
    </div>
  );
}

Progress.propTypes = {
  duration: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default Progress;
