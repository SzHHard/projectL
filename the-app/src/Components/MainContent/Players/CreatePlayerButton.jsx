import React, { useState } from 'react'
import ModalWindow from '../../common/ModalWindow';
import { connect } from 'react-redux';
import CreatePlayerForm from './CreatePlayerForm';

const CreatePlayerButton = (props) => {

    const [isActive, setIsActive] = useState(false);


    return (
        <div>
            <button onClick={() => setIsActive(true)} > Create one</button>
            <ModalWindow isActive={isActive} setIsActive = {setIsActive}> {<CreatePlayerForm />} </ModalWindow>
        </div>
    )
}



const mapStateToProps = (props) => {
    return {

    }
}

export default connect(mapStateToProps, {})(CreatePlayerButton)