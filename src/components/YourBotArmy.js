import React from 'react';

function YourBotArmy(props) {
  //const yourArmy = props.yourArmy;

  const handleRemove = (bot) => {
    props.removeBot(bot);
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div  >
        {props.yourArmy.map(bot => (
          <div className='bot-card' onClick={() => handleRemove(bot)}
          key={bot.id}>
             
            <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
            <h5 className='bot-name'>Name:{bot.name}</h5>
            <p className='bot-armor'>Armor: {bot.armor}</p>
            <p className='bot-damage'>Damage: {bot.damage}</p>
            <p className='bot-health'>Health: {bot.health}</p>
            <p className='bot-class'>Bot Class: {bot.bot_class}</p>
             
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
