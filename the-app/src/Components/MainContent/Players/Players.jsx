import React from 'react';
import Player from './Player';
import stylesPlayers from './Players.module.css';
import CreatePlayerButton from './CreatePlayerButton';

class Players extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return (

            <div className={stylesPlayers.playersComponent}>

                <CreatePlayerButton />

                {this.props.cardsArr.map((card) => {return <Player id={card._id} profileUrl={card.profileUrl} briefInfo={card.briefInfo} rank={card.rank} categories={card.categories}/> })}
                Here will be PLAYERS components
            </div>

        )
    }
}

export default Players;