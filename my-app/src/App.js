import './App.css'
import { SimpleSlider } from './SimpleSlider';
import { Header } from './Header';
import { SignUpWindow } from './SignUpWindow';
import  AffilateProgram  from './AffilateProgram';
import { Circle } from './Circle'
import { useState } from 'react'

const App = () => {
  
  const [showWindow, setShowWindow] = useState(false);

  return (
    
    <div className='MAIN_CONT'>
      <Header setShowWindow={setShowWindow}/>
      <SimpleSlider />
      { showWindow && <SignUpWindow /> }
      <AffilateProgram />
      <Circle />
    </div>

  );
}

  export default App;
