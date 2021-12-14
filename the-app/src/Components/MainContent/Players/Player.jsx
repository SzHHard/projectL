import React, { useState } from 'react'
import DeleteCardButton from './DeleteCardButton'
import styles from './Player.module.css' // при необходимости вернуть на НЕ COPY
import ModalWindow from '../../common/ModalWindow'
import FullInfoAboutPlayer from './FullInfoAboutPlayer'
import UpdateCardButton from './updateCardButton'
import CardSettingsButton from './CardSettingsButton'


const Player = (props) => {

    const [isActive, setIsActive] = useState(false);

    const openFullInfo = () => {

        setIsActive(true);
    }


    let categoriesString = ''
    //console.log(props.categories)
    props.categories.forEach((cat) => { categoriesString += `${cat} ` })



    let isCurrentUsersCard = false;
    for (let index in props.MyCardsArr) {

        if (props.MyCardsArr[index]._id === props.cardId) {

            isCurrentUsersCard = true;
        }
    }
    return (

        <div className={styles.wrapper}>

            <div className={styles.playerInstance}>

                <div className={styles.profileImageContainer}>
                    {props.profileUrl}
                </div>

                <div className={styles.profileNameContainer}>
                    {props.profileName}
                </div>

                <div className={styles.contentContainer}>

                    <div className={styles.rolesRankServerContainer}>

                        <div className={styles.roles}>

                            {props.mainRoles.map((role, index) => {
                                return <span key={index} className={styles.mainRoles}> {role} </span>
                            })}

                            {props.offRoles.map((role, index) => {
                                return <span className={styles.offRoles}> {role} </span>
                            })}
                        </div>

                        <div className={styles.serverRank}>
                            <span> {props.server} </span>
                            <span> {props.rank} </span>
                        </div>
                    </div>



                    <div onClick={openFullInfo} className={`${styles.mainInfoContainer}`}>
                        {props.briefInfo}

                    </div>
                </div>
                <div className={styles.categoriesContainer}>
                    {categoriesString}
                </div>

                <div className={styles.interactions}>
                    {isCurrentUsersCard && <CardSettingsButton id={props.cardId} />}
                </div>






            </div>


            <ModalWindow isActive={isActive} setIsActive={setIsActive}> {<FullInfoAboutPlayer categoriesString={categoriesString} {...props} />} </ModalWindow>





        </div>
    )
}


export default Player;