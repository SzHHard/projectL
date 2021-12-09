import React from 'react'
import Player from './Player'
import stylesPlayers from './Players.module.css'


class Players extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        console.log(this.props)
        

        return (

            <div className={stylesPlayers.playersComponent}>
                {this.props.cardsArr.map((card) => {return <Player profileUrl={card.profileUrl} briefInfo={card.briefInfo} rank={card.rank} categories={card.categories}/> })}
                Here will be PLAYERS components
            </div>

        )
    }
}

export default Players;