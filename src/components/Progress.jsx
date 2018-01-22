import React from 'react';
import PropTypes from 'prop-types';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration,
      current: props.current,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      duration: nextProps.duration,
      current: nextProps.current,
    });
  }

  render() {
    return (
      <div
        className="progress"
        style={{ marginBottom: '20px', justifyContent: 'space-between' }}
        tabIndex={0}
        role="button"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={{
            width: `${this.state.current / this.state.duration * 100}%`,
            textAlign: 'right',
          }}
          aria-valuenow="10"
          aria-valuemin="0"
          aria-valuemax="100"
        />
        <span>
          {`${parseInt(this.state.current, 10)} / ${parseInt(this.state.duration, 10)} s`}
        </span>
      </div>
    );
  }
}

Progress.propTypes = {
  duration: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default Progress;
