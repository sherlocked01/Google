import './App.css';
import React, {useState, useEffect} from 'react';
import './switcher.scss';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
  //state
  const [colorTheme, setColorTheme] = useState('theme-black');

  //effect
  useEffect(() => {

    //checking for selected theme
    const currentThemeColor  = localStorage.getItem('theme-color');

    //if found set selected theme value in state
    if(currentThemeColor){
      setColorTheme(currentThemeColor);
    }
  }, [])

  //set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme)
  }

  return (
    
    <div className={`App ${colorTheme}`}>
      <div style={{float: 'left', width: '1%'}}>
      <div className="container p-2">
        <select className="theme-options" onChange = {(e) => handleClick(e.target.value)}
        >
          <option value="theme-white">White</option>
          <option value="theme-blue">Blue</option>
          <option value="theme-orange">Orange</option>
          <option value="theme-green">Green</option>
          <option value="theme-purple">Purple</option>
          <option value="theme-black">Black</option>
        </select>
      </div>
      {/* <div className="theme-options">
        <div id="theme-white"
          onClick = {() => handleClick('theme-white')}
          className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
        />
        <div id="theme-blue"
          onClick = {() => handleClick('theme-blue')}
          className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
        />
        <div id="theme-orange"
          onClick = {() => handleClick('theme-orange')}
          className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
        />
        <div id="theme-green"
          onClick = {() => handleClick('theme-green')}
          className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
        />
        <div id="theme-purple"
          onClick = {() => handleClick('theme-purple')}
          className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
        />
        <div id="theme-black"
          onClick = {() => handleClick('theme-black')}
          className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
        />
      </div> */}
      </div>
      <div className="header">
        <Header/>
      </div>
      <Home/>
      {/* <div className="content-box">
        <p>cxjxcbcbs</p>
      </div> */}
    </div>
  );
}

export default App;
