import React, { useContext } from 'react';
import { default as themeContext } from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

// class Content extends React.Component {
//   componentDidMount() {
//     console.log(this.context);
//   }

//   static contextType = themeContext;

//   render()  {
//     const {theme, switchTheme} = this.context;
    
//     return (
//     <div>
//       <h1>This is Content</h1>
//       <Counter>
//         {(count, handleCount) =>( 
//             <HoverCounter count={count} handleCount={handleCount} theme={theme} switchTheme={switchTheme}/>
//         )}
//       </Counter>
//     </div>
//   )
//   }
// }

// For Functional Components
const Content = () => {
   const {theme, switchTheme} = useContext(themeContext);

   console.log('Content rendered');
    
    return (
    <div>
      <h1>This is Content</h1>
      <Counter>
        {(count, handleCount) =>( 
            <HoverCounter count={count} handleCount={handleCount} theme={theme} switchTheme={switchTheme}/>
        )}
      </Counter>
    </div>
  )
}

export default Content