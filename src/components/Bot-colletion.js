import React, { useState, useEffect } from 'react';
import BotSpecs from './botSpecs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit, faStar, faMagic, faFistRaised, faShieldAlt, faCrown,faHeart } from '@fortawesome/free-solid-svg-icons';

function BotCollection(props) {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const classIcons = {
    "Healer": faHeart,
    "Support": faStar,
    "Medic": faMedkit,
    "Witch": faMagic,
    "Assault": faFistRaised,
    "Defender": faShieldAlt,
    "Captain": faCrown
  };

  useEffect(() => {
    fetch('https://api.npoint.io/3f9834e1240b04eb4361/bots/')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error(error));
  }, []);

  const handleClick = bot => {
    setSelectedBot(bot);
  }

  const handleEnlist = bot => {
    props.addBot(bot);
    setSelectedBot(null);
  }

  const handleBack = () => {
    setSelectedBot(null);
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
    <center className='body'>
      <div>
           <div className='tittle'>
            <h2 >Bot Battlr App</h2>
              <h6>click on the bot to add to your Army</h6>
              </div>
            {selectedBot ? (
              <BotSpecs
                bot={selectedBot}
                handleEnlist={handleEnlist}
                handleBack={handleBack}
              />
            ) : (
              bots.map(bot => (
                <div
                  className='bot-card'
                  onClick={() => handleClick(bot)}
                  key={bot.id}
                >
                  <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
                  <div className='divtwo'>
                    <h5 className='bot-name'>
                      {bot.name}
                         <FontAwesomeIcon icon={classIcons[bot.bot_class]} /></h5>
                    
                          <h6 className='bot-catchphrace'>{bot.catchphrase}</h6>
                          <p className='bot-armor'><FontAwesomeIcon icon={faShieldAlt} />{bot.armor}</p>
                          <p className='bot-damage'>{bot.damage}</p>
                          <p className='bot-health'><FontAwesomeIcon icon={faHeart} />{bot.health}</p>
                     
                    <button className='delete-bot' onClick={() => handleDelete(bot)}>x</button>
                    </div> 
                </div>
                
            )))}
              
            
        </div>
        </center>
  );
}

export default BotCollection;
