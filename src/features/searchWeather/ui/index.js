import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmpty from 'lodash/isEmpty'

import { DisplayOfWeather } from './DisplayOfWeather'
import { getPayloadWeather } from '../ducks/selectors'
import { getWeather } from '../ducks/actions'

class Content extends React.Component {
  static propTypes = {
    getWeather: PropTypes.func,
    weatherData: PropTypes.object,
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

  onClick = () => {
    const { getWeather } = this.props
    const { city } = this.state

    getWeather(city)
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.onClick()
    }
  }

  render() {
    const { city } = this.state
    const { weatherData } = this.props

    return (
      <div>
        <input
          type="text"
          value={city}
          onChange={e => this.onChange(e.target.value, 'city')}
          onKeyDown={e => this.onKeyDown(e)}
        />
        <button onClick={this.onClick}>Найти</button>
        {weatherData && !isEmpty(weatherData) && (
          <DisplayOfWeather weatherData={weatherData} />
        )}
      </div>
    )
  }
}

const mapState = state => ({
  weatherData: getPayloadWeather(state),
})

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      getWeather,
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(Content)
