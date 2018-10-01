import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DisplayOfWeather } from 'features/content/ui/DisplayOfWeather'
import isEmpty from 'lodash/isEmpty'

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

  onClick = async() => {
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
    const {
      city,
    } = this.state
    const {
      weatherData,
    } = this.props

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

const mapState = state => ({
  weatherData: state.archive.payload,
})

const mapDispatch = dispatch => ({
  getWeather: nameCity => dispatch.archive.getWeather(nameCity)
})

export default connect(mapState, mapDispatch)(Content)
