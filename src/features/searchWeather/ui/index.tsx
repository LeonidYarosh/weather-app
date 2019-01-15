import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import isEmpty from 'lodash/isEmpty'
import { NavigationDrawer } from 'react-md'

import { DisplayOfWeather } from './DisplayOfWeather'

import { getPayloadWeather } from '../ducks/selectors'
import { getWeather, TGetWeather } from '../ducks/actions'
import { IStore } from 'features/ducks'
import { IEventKeyboard } from '../../common/types'
import { IWeather } from '../api'

type State = {
  city?: string,
}

type Props = {
  getWeather(city: string): void,
  weatherData: IWeather,
}

class Content extends React.Component<Props, State> {

  state = {
    city: '',
  }

  onChange = (value:string, name: string):void => {
    this.setState({
      [name]: value,
    })
  }

  onClick = ():void => {
    const { getWeather } = this.props
    const { city } = this.state

    getWeather(city)
  }

  onKeyDown = (e: IEventKeyboard):void => {
    if (e.key === 'Enter') {
      this.onClick()
    }
  }

  render() {
    const { city } = this.state
    const { weatherData } = this.props

    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to react-md"
      >
        <input
          type="text"
          value={city}
          onChange={e => this.onChange(e.target.value, 'city')}
          onKeyDown={e => this.onKeyDown(e)}
          placeholder="Введите название города"
        />
        <button onClick={this.onClick}>Найти</button>
        {weatherData && !isEmpty(weatherData) && (
          <DisplayOfWeather weatherData={weatherData} />
        )}
      </NavigationDrawer>
    )
  }
}

const mapState = (state:IStore) => ({
  weatherData: getPayloadWeather(state),
})

const mapDispatch = (dispatch:Dispatch) =>
  bindActionCreators(
    {
      getWeather,
    },
    dispatch,
  )

export default connect(
  mapState,
  mapDispatch,
)(Content)
