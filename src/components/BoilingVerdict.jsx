export default function BoilingVerdict({temperature = 0}) {
  let info = temperature >= 100 ?'Water would be boil' : 'Water would not be boil';
  return <p>{info}</p>
}