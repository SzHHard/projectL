import React, { useState } from 'react'
import ModalWindow from '../../common/ModalWindow';
import CreatePlayerFormContainer from './CreatePlayerFormContainer';

const CreatePlayerButton = (props) => {

    const [isActive, setIsActive] = useState(false);

    const showWindow = () => {
        setIsActive(true)
    }


    return (
        <div>
            <button onClick={showWindow} > Create one</button>
            <ModalWindow isActive={isActive} setIsActive = {setIsActive}> {<CreatePlayerFormContainer />} </ModalWindow>
        </div>
    )
}





export default CreatePlayerButton