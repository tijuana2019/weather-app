import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <div>
    <div className="forecast-summary__date">
      {props.date}
      <span />
    </div>
    <div className="forecast-summary__temperature">
      {props.temperature}
      <span />
    </div>
    <div className="forecast-summary__description">
      {props.description}
      <span />
    </div>
    <div className="forecast-summary__icon">
      {props.icon}
      <span />
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
