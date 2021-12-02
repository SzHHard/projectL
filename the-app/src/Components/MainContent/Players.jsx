import React from 'react'
import stylesPlayers from './Players.module.css'
import Player from './Players/Player'

class PlayersComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        console.log(this.props)
        return (

            <div className={stylesPlayers.playersComponent}>
                {this.props.Players.playerCards.map((card) => {return <Player profileImg={card.profileImg} mainInfo={card.mainInfo} rankIcon={card.rankIcon} categories={card.categories}/> })}
                Here will be PLAYERS components
            </div>

        )
    }
}

export default PlayersComponent;