import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMedkit, faStar, faMagic, faFistRaised, faShieldAlt, faCrown,faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function YourBotArmy(props) {
  const [bots, setBots] =useState([]);
  //const yourArmy = props.yourArmy;

  const handleRemove = (bot) => {
    props.removeBot(bot);
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
  const classIcons = {
     
    "Healer": faHeart,
    "Support": faStar,
    "Medic": faMedkit,
    "Witch": faMagic,
    "Assault": faFistRaised,
    "Defender": faShieldAlt,
    "Captain": faCrown
  };

  return (
    <div className='army'>
      <h2 className='bot-army'>Your Bot Army</h2>
      <div  >
        {props.yourArmy.map(bot => (
          <div className='bot-card' onClick={() => handleRemove(bot)}
          key={bot.id}>
          <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
            <h5 className='bot-name'>Name:{bot.name}</h5>
            <p className='bot-armor'><FontAwesomeIcon icon={faShieldAlt} />{bot.armor}</p>
            <p className='bot-damage'>{bot.damage}</p>
            <p className='bot-health'><FontAwesomeIcon icon={faHeart} />{bot.health}</p>
            <p className='bot-class'> <FontAwesomeIcon icon={classIcons[bot.bot_class]} /> {bot.bot_class}</p>
            <button className='delete-bot' onClick={() => handleDelete(bot)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
