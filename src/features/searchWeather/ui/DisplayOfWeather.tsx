import React from 'react'
import PropTypes from 'prop-types'

import { converterFahrenheitToCelsius } from 'utils'
import { getIconUrl } from 'features/common/const'
import { IWeather } from '../api'

type Props = {
  weatherData: IWeather,
}

export class DisplayOfWeather extends React.Component<Props> {
  static propTypes = {
    weatherData: PropTypes.object,
  }

  render() {
    const {
      weatherData: {
        main: {
          temp,
          temp_max: tempMax,
          temp_min: tempMin,
        },
        weather,
        description,
        name,
        wind: {
          speed,
        },
      },
    } = this.props
    const weatherCurrent = weather[0]
    const iconUrl = getIconUrl(weatherCurrent.icon)

    return (
      <div>
        <h1>
          {weatherCurrent.main} in {name}
          <img src={iconUrl} alt={description} />
        </h1>
        <p>Current: {converterFahrenheitToCelsius(temp)}°C</p>
        <p>High: {converterFahrenheitToCelsius(tempMax)}°C</p>
        <p>Low: {converterFahrenheitToCelsius(tempMin)}°C</p>
        <p>Wind Speed: {speed} mi/hr</p>
      </div>
    )
  }
}
