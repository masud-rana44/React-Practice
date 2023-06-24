export default function HoverCounter({count, handleCount}){
    return (
      <h1 onMouseOver={handleCount}>
        Hovered {count} times
      </h1>
    )
}
