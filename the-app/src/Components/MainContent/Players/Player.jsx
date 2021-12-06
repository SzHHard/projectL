import React from 'react'
import stylesPlayer from './Player.module.css'

class Player extends React.Component {

    render() {
        
        let categoriesString = '' 
        console.log(this.props);
        this.props.categories.forEach((cat) => {categoriesString += `${cat} `})
        
        return (

            <div className={stylesPlayer.wrapper}>
                <div className={stylesPlayer.playerInstance}>

                    <div className={stylesPlayer.profileImageContainer}>
                        {this.props.profileImg}
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

export default Player