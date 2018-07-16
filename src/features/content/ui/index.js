import React from 'react'
import { DisplayOfWeather } from 'features/content/ui/DisplayOfWeather'
import isEmpty from 'lodash/isEmpty'

import { getWeather } from 'features/content/api'


export class Content extends React.Component {
  static propTypes = {
  }

  state = {
    city: '',
    weatherData: null,
  }

  onChange = (value, name) => {
    this.setState({
      [name]: value,
    })
  }

  onClick = async() => {
    const { city } = this.state
    const weatherData = city ? await getWeather(city) : null

    if (weatherData && !isEmpty(weatherData)) {
      this.onChange(weatherData, 'weatherData')
    }
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.onClick()
    }
  }

  render() {
    const {
      city,
      weatherData,
    } = this.state

    return (
      <div>
        <input
          type="text"
          value={city}
          onChange={e => this.onChange(e.target.value, 'city')}
          onKeyDown={e => this.onKeyDown(e)}
        />
        <button onClick={this.onClick}>
          Найти
        </button>
        {
          weatherData && !isEmpty(weatherData) &&
          <DisplayOfWeather weatherData={weatherData} />
        }
      </div>
    )
  }
}
