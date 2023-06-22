import React from 'react';
import convert from '../utils/convert';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    currentScale: 'c'
  }

  handleChange = ( e, scale) => {
    this.setState( {
      temperature: e.target.value,
      currentScale: scale
    } );
  }

  render() {
    const {temperature, currentScale} = this.state;
    const celcius = currentScale === 'f' ? convert(temperature, 'c') : temperature;
    const fahrenhite = currentScale === 'c' ? convert(temperature, 'f') : temperature;

    return (
      <div>
      <TemperatureInput temperature={celcius} scale='c' handleChange={this.handleChange}/>

      <TemperatureInput temperature={fahrenhite} scale='f' handleChange={this.handleChange}/>

      <BoilingVerdict temperature={parseFloat(temperature)}/>
      </div>
    )
  }
}