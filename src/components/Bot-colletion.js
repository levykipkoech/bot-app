import React, { useState, useEffect } from 'react';
 

function BotCollection(props) {
  const [bots, setBots] = useState([]);
   
  useEffect(() => {
    fetch('https://api.npoint.io/3f9834e1240b04eb4361/bots/')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = bot => {
    props.addBot(bot);
  }
  const handleDelete = bot => {
    fetch(`https://api.npoint.io/3f9834e1240b04eb4361/bots/${bot.id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          setBots(bots.filter(b => b.id !== bot.id));
        } else {
          throw new Error("Failed to delete bot.");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Failed to delete bot.");
      });
  };


  return (
    <center>
      <div  >
            <h2>Bot Collection</h2>
            {bots.map(bot => (
              
                <div className='bot-card'
                onClick={() => handleClick(bot)}
                  key={bot.id}>
                    <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
                    <h5 className='bot-name'>Name:{bot.name}</h5>
                    <p className='bot-armor'>Armor: {bot.armor}</p>
                    <p className='bot-damage'>Damage: {bot.damage}</p>
                    <p className='bot-health'>Health: {bot.health}</p>
                    <p className='bot-class'>Bot Class: {bot.bot_class}</p>
                    <button className='delete-bot' onClick={() => handleDelete(bot)}>x</button>
                </div>
                
            ))}
            
        </div>
        </center>
  );
}

export default BotCollection;
