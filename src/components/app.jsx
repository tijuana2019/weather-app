import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.css';
import '../styles/forecast-summaries.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  render() {
    const selectedForecast = this.props.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );

    return (
      <div className="forecast">
        <LocationDetails city={this.props.location.city} country={this.props.location.country} />
        <ForecastSummaries
          onForecastSelect={this.handleForecastSelect}
          forecasts={this.props.forecasts}
        />
        <ForecastDetails forecast={this.selectedForecast} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
