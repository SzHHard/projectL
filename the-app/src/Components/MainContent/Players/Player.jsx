import React, {useState} from 'react'
import DeleteCardButton from './DeleteCardButton'
import stylesPlayer from './Player.module.css'
import ModalWindow from '../../common/ModalWindow'

const Player = (props) => {


    const [isActive, setIsActive] = useState(false);

   const  openFullInfo = () => {

        setIsActive(true);
    }

    let categoriesString = ''
    props.categories.forEach((cat) => { categoriesString += `${cat} ` })

    return (

        <div className={stylesPlayer.er}>

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

                <div className={stylesPlayer.categoriesContainer}>
                    {categoriesString}

                </div>
            </div>

            <ModalWindow isActive={isActive} setIsActive = {setIsActive}> {'ЫЫЫЫЫЫЫЫ'} </ModalWindow>

            <DeleteCardButton id={props.id} />

        </div>
    )
}


export default Player;