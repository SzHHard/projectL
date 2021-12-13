import React, { useState } from 'react'
import DeleteCardButton from './DeleteCardButton'
import stylesPlayer from './Player.module.css'
import ModalWindow from '../../common/ModalWindow'
import FullInfoAboutPlayer from './FullInfoAboutPlayer'
import UpdateCardButton from './updateCardButton'

const Player = (props) => {

    const [isActive, setIsActive] = useState(false);

    const openFullInfo = () => {

        setIsActive(true);
    }

    let categoriesString = ''
    props.categories.forEach((cat) => { categoriesString += `${cat} ` })


    
    let isCurrentUsersCard = false; 
    for (let index in props.MyCardsArr) {
        //debugger;
        if(props.MyCardsArr[index]._id === props.cardId) {
           // debugger;
            isCurrentUsersCard = true;
        }
    }

    return (

        <div className={stylesPlayer.wrapper}>

            <div className={stylesPlayer.playerInstance}>

                <div className={stylesPlayer.profileImageContainer}>
                    {props.profileUrl}
                </div>

                <div onClick={openFullInfo} className={`${stylesPlayer.mainInfoContainer}`}>
                    {props.briefInfo}

                </div>

                <div className={stylesPlayer.rankIconContainer}>
                    {props.rank}
                </div>

                <div className={stylesPlayer.nicknameContainer}>
                    {props.nickName}
                </div>

                <div className={stylesPlayer.categoriesContainer}>
                    {categoriesString}

                </div>
            </div>

            <ModalWindow isActive={isActive} setIsActive={setIsActive}> {<FullInfoAboutPlayer categoriesString={categoriesString} {...props} />} </ModalWindow>

            { isCurrentUsersCard && <DeleteCardButton id={props.cardId} /> /* если id карточки содержится в массиве, приходящем из props, то отобразим */} 
            { isCurrentUsersCard &&  <UpdateCardButton id={props.cardId}/> }

        </div>
    )
}


export default Player;