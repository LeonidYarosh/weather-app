import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import isEmpty from 'lodash/isEmpty'
import memoize from 'lodash/memoize'

import { DisplayOfWeather } from './DisplayOfWeather'
import { getPayloadWeather } from '../ducks/selectors'
import { getWeather, TGetWeather } from '../ducks/actions'
import { IStore } from 'features/ducks'
import { IEventKeyboard } from '../../common/types'
import { IWeather } from '../api'

/**
 * Интерфейс состояния Content компонента
 * @prop {string} [city] - название города
 */
interface IState {
  city?: string,
}

interface IStateProps {
  weatherData: IWeather,
}

interface IDispatchProps {
  getWeather: (city: string) => void,
}

type TProps = IDispatchProps & IStateProps

/**
 * @class Content
 */
class Content extends React.Component<TProps, IState> {

  state:IState = {
    city: '',
  }
  /**
   * @function
   * @inner
   * @param value
   * @param name
   */
  handleChange = (value:string, name: string) => {
    this.setState({
      [name]: value,
    })
  }

  handleClick = () => {
    const { getWeather } = this.props
    const { city } = this.state

    getWeather(city)
  }

  handleKeyDown = (e: IEventKeyboard) => {
    if (e.key === 'Enter') {
      this.handleClick()
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
          onChange={memoize(e => this.handleChange(e.target.value, 'city'))}
          onKeyDown={this.handleKeyDown}
          placeholder="Введите название города"
        />
        <button onClick={this.handleClick}>Найти</button>
        {weatherData && !isEmpty(weatherData) && (
          <DisplayOfWeather weatherData={weatherData} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state:IStore):IStateProps => ({
  weatherData: getPayloadWeather(state),
})

const mapDispatchToProps = (dispatch:Dispatch):IDispatchProps =>
  bindActionCreators(
    {
      getWeather,
    },
    dispatch,
  )

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Content)
