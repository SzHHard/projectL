import React from 'react';
import Player from './Player';
import stylesPlayers from './Players.module.css';
import CreatePlayerButton from './CreatePlayerButton';

const Players = (props) => {

  
  

        return (

            <div className={stylesPlayers.playersComponent}>

                <CreatePlayerButton />

                {props.cardsArr.map((card, index) => {return <Player  key={index} id={card._id} {...card} /> })}
                Here will be PLAYERS components
            </div>

        )
    
}

export default Players;