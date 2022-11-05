import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenhite',
};
export default function TemperatureInput({ temperature, scale, onTemparatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input type="text" value={temperature} onChange={(e) => onTemparatureChange(e, scale)} />
    </fieldset>
  );
}
