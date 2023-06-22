export default function Button ({ isBD, handleClick }) {
  return (
    <button onClick={handleClick}>{isBD ? 'Click Here!' : 'ক্লিক করুন'}</button>
  );
}