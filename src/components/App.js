import React from 'react';
import './App.css'
import BotCollection from './Bot-colletion.js'
import YourBotArmy from './YourBotArmy';
 


function App() {
  const [yourArmy, setYourArmy] = React.useState([]);
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
   
  <div className='App'>
    <h2 className='header'>THE BOT COLLECTION  </h2>
      <YourBotArmy yourArmy={yourArmy} removeBot={removeBot}/>
      <BotCollection addBot={addBot} yourArmy={yourArmy} />
    </div>
  );
}

export default App;
