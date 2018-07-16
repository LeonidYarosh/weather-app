import React from 'react'
import PropTypes from 'prop-types'

export class DisplayOfWeather extends React.Component {
  static propTypes = {
    weatherData: PropTypes.object,
  }

  render() {
    const { weatherData } = this.props
    const weather = weatherData.weather[0]
    const iconUrl = 'http://openweathermap.org/img/w/' + weather.icon + '.png'

    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp - 51}°C</p>
        <p>High: {weatherData.main.temp_max - 51}°C</p>
        <p>Low: {weatherData.main.temp_min - 51}°C</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
      </div>
    )
  }
}
