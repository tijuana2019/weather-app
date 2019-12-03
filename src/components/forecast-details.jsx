import React from 'react';
import PropTypes from 'prop-types';

function ForecastDetails(props) {
  return <span>{props.forecast}</span>;
}

ForecastDetails.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export default ForecastDetails;
