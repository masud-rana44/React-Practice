export default function HoverCounter({count, handleCount, theme, switchTheme}){

    const style = theme === 'light' ? {backgroundColor: '#fff', color: '#000'} : null

    console.log('HoverCounter rendered');

    return (
      <div>
        <h1 onMouseOver={handleCount} style={style}>
        Hovered {count} times
      </h1>
      <button type="button" onClick={switchTheme}>Change Theme</button>
      </div>
    )
}
