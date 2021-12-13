import React, {useState} from 'react'
import settingsImg from '../../../images/setting.png'
//import ModalWindow from '../../common/ModalWindow'
import styles from './CardSettingsButton.module.css'
import DeleteCardButton from './DeleteCardButton'
import UpdateCardButton from './updateCardButton'
// import ModalWindow from ''

// const withId = (Component, id) => {                    // хороший способ передать пропсы в children of modalWindow

//     return(
//         <Component id={id}/>  
//     )
// } 


const CardSettingsButton = (props) => {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive)
    }
   

    return (
        <div className={styles.settingsButtonContainer}>
            <img onClick = {toggleActive} alt={'settings'}  className = {styles.settingsImg} src={settingsImg}></img>

            {/* <ModalWindow setIsActive={setIsActive}> {withId(DeleteCardButton, props.id)} </ModalWindow> */}
            { isActive && <DeleteCardButton id={props.id} /> }
            { isActive &&  <UpdateCardButton id={props.id}/> }
        </div>
    )
}

export default CardSettingsButton;