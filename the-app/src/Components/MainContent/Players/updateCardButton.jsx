
import React, { useState } from 'react'
import ModalWindow from '../../common/ModalWindow';
import { updatePlayerCardTC } from '../../../State/PlayersReducer';
import { connect } from 'react-redux';
import CreatePlayerForm from './PlayerForm';

const withId = (id) => {                    // хороший способ передать пропсы в children of modalWindow

    return(
        <CreatePlayerForm id={id} action={'update'}/>  
    )
} 


const UpdateCardButton = (props) => {

    const [isActive, setIsActive] = useState(false);
    const showWindow = () => {
        setIsActive(true)
    }

    return (
        <div>
            <button onClick={showWindow} > Update one </button>
            <ModalWindow  isActive={isActive} setIsActive = {setIsActive}> {withId(props.id)}    </ModalWindow>
        </div>
    )
}


export default connect(() => {return}, { updatePlayerCardTC })(UpdateCardButton);


