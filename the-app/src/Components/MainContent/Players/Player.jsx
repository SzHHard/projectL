import React from 'react'
import stylesPlayer from './Player.module.css'

class Player extends React.Component {

    render() {

        let categoriesString = ''
        console.log(this.props);
        this.props.categories.forEach((cat) => { categoriesString += `${cat} ` })

        /*
        {
            profileUrl: 'url',
            nickName: 'szh',
            briefInfo: 'brief Info Here',
            fullInfo: 'full info here',
            rank: 'diamond24',
            sex: 'male',
            mainRoles: ['jungler'],
            offRoles: ['mid'],
            categories: ['cat1, cat2']
        }
        */

        return (

            <div className={stylesPlayer.wrapper}>
                <div className={stylesPlayer.playerInstance}>

                    <div className={stylesPlayer.profileImageContainer}>
                        {this.props.profileUrl}
                    </div>

                    <div className={stylesPlayer.mainInfoContainer}>
                        {this.props.briefInfo}
                    </div>

                    <div className={stylesPlayer.rankIconContainer}>
                        {this.props.rank}
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