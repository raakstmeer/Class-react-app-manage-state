import React from 'react';
import { convert, toCelsius, toFahrenhite } from '../lib/Convert';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
  state = { temperature: '', scale: 'c' };

  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
    const fahrenhite = scale === 'c' ? convert(temperature, toFahrenhite) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemparatureChange={this.handleChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenhite}
          onTemparatureChange={this.handleChange}
        />
        <BoilingVerdict celsius={temperature} />
      </div>
    );
  }
}
