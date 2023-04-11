import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// import {Link, useNavigate} from 'react-router-dom'
import './App.css'
import BotCollection from './Bot-colletion.js'
import YourBotArmy from './YourBotArmy';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
 


function App() {
  const [yourArmy, setYourArmy] = useState([]);
  //const [bots, setBots] = useState([]);
  
  const addBot = (bot) => {
    if (!yourArmy.find(b => b.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  }

  const removeBot = (bot) => {
    setYourArmy(yourArmy.filter(b => b.id !== bot.id));
  }
return(
   <Router>
        <div className='App'>
            <div className='header'>
                  <h2 >THE BOT COLLECTION  </h2>
                 <div className='links'>
                    <Link to='/army'>Army</Link>
                    <Link to='/collection'>colection</Link>
                </div> 
            </div>
              <Routes>
              <Route path='/collection' element={<BotCollection addBot={addBot} yourArmy={yourArmy} />}/>
                <Route path='/Army' element={<YourBotArmy yourArmy={yourArmy} removeBot={removeBot}/>} />
              </Routes>
        </div>
    </Router>
  );
}

export default App;
