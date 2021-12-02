import React from 'react'
import stylesTeams from './Teams.module.css'
import Team from './Teams/Team'

class TeamsComponent extends React.Component {

    render() {

        return (


            <div className={stylesTeams.teamsComponent}>
                
                {this.props.Teams.teamCards.map((card) => {return <Team teamLogo={card.teamLogo} mainInfo={card.mainInfo} rankIcon={card.rankIcon} categories={card.categories} /> })}

                Here will be TEAMS components
            </div>
        )
    }
}

export default TeamsComponent;