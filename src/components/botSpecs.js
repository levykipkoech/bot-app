import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedkit, faStar, faMagic, faFistRaised, faShieldAlt, faCrown,faHeart } from '@fortawesome/free-solid-svg-icons';

function BotSpecs(props) {
  const { bot, handleEnlist, handleBack } = props;
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
   
    <div className='bot-card'>
      <img className='bot-img' src={bot.avatar_url} alt={bot.name} />
      <div className='bot-info'>
        <h5 className='bot-name'>
          {bot.name}
          <FontAwesomeIcon icon={classIcons[bot.bot_class]} />
        </h5>
           <h6 className='bot-catchphrace'>{bot.catchphrase}</h6>
            <p className='bot-armor'><FontAwesomeIcon icon={faShieldAlt} />{bot.armor}</p>
            <p className='bot-damage'>{bot.damage}</p>
            <p className='bot-health'><FontAwesomeIcon icon={faHeart} />{bot.health}</p>
      </div>
      <center>
      <div className='bot-actions'>
        <button className='enlist-bot' onClick={() => handleEnlist(bot)}>
          Add to Army
        </button>
        <button className='back-button' onClick={handleBack}>
          Back
        </button>
      </div>
      </center>
    </div>
  
  );
}

export default BotSpecs;
