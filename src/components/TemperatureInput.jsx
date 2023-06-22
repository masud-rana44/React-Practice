export default function TemperatureInput ({ temperature, scale, handleChange }) {
  const scaleName = {
    c: 'celcius',
    f: 'farhenhite',
    k: 'kelvin'
  }

  return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}: </legend>
        <input type="number" value={temperature} onChange={(e) => handleChange(e, scale)}/>
      </fieldset>
  )
}