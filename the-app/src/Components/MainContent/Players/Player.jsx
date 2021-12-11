import React from 'react'
import DeleteCardButton from './DeleteCardButton'
import stylesPlayer from './Player.module.css'


class Player extends React.Component {

    render() {

        let categoriesString = ''
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
                <DeleteCardButton id={this.props.id} />
            </div>
        )
    }
}

export default Player;