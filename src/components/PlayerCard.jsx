import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';

function PlayerCard(props) {
  const { cardItem } = props;

  return (
    <div className="card">
      <img src={cardItem.cover} style={{ height: '240px' }} alt="Logo" />
      <div className="card-body">
        <h5 className="card-title">{cardItem.name}</h5>
        <audio id="audio">
          <source src={cardItem.src} />
          <track kind="captions" />
        </audio>
        <button className="btn btn-dark" onClick={props.handlePlay}>
          {props.playing ? <i className="fa fa-stop" /> : <i className="fa fa-play" />}
        </button>
      </div>
      <div className="col-12">
        <Progress duration={props.duration} current={props.current} />
      </div>
    </div>
  );
}

PlayerCard.propTypes = {
  cardItem: PropTypes.shape({
    cover: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
  handlePlay: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default PlayerCard;
