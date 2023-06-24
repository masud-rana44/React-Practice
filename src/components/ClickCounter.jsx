export default function ClickCounter({count, handleCount}){
    return (
      <button type="button" onClick={handleCount}>
        clicked {count} times
      </button>
    )
}