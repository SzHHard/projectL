import React from 'react';
import Player from './PlayerContainer';
import styles from './Players.module.css';
import CreatePlayerButton from './CreatePlayerButton';
import MyCardsButton from './MyCardsButton'


const Players = (props) => {




    return (

        <div className={styles.playersComponent}>
            <div className = {styles.playersHeader}>
                <CreatePlayerButton />

                <MyCardsButton />
            </div>

            {props.cardsArr.map((card, index) => { return <Player key={index} cardId={card._id} {...card} /> })}

        </div>

    )

}

export default Players;