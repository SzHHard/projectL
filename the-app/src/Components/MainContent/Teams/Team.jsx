import React from 'react'
import stylesPlayer from './Team.module.css'

class Team extends React.Component {



    render() {
        
        let categoriesString = '' 
        this.props.categories.forEach((cat) => {categoriesString += `${cat} `})
        
        return (

            <div className={stylesPlayer.wrapper}>
                <div className={stylesPlayer.teamInstance}>

                    <div className={stylesPlayer.teamLogoContainer}>
                        {this.props.teamLogo}
                    </div>

                    <div className={stylesPlayer.mainInfoContainer}>
                        {this.props.mainInfo}
                    </div>

                    <div className={stylesPlayer.rankIconContainer}>
                        {this.props.rankIcon}
                    </div>

                    <div className={stylesPlayer.categoriesContainer}>
                        {categoriesString}
                    </div>
                </div>
            </div>
        )
    }
}

export default Team