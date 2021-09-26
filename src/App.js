// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import {Navbar} from './components/Navbar';
import {TextForm} from './components/TextForm';
import React, { useState } from 'react'

function App() {
  // Entire thing written inside return is called JSX. -Nothing but HTML hiding behind JS.
  // <> </> only one tag can be returned. you can use JSX fragment
  const [mode, setMode] = useState('light'); // whether darkmode is enabled or not.
  const toggleMode = () =>
  {
      if (mode === 'light')
      {
          setMode('dark')
          document.body.style.backgroundColor = '#06295c'
      }
      else
      {
          setMode('light')
          document.body.style.backgroundColor = 'white'
      }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter text to analyze" mode={mode}/>
    </div>
    {/* <div className="container my-3">
      <About />
    </div> */}
    </>
  );
}

export default App;
