import React from "react";
import {addAPlayerAC} from "../../../../State/PlayersReducer";
import PlayerForm from "./CreatePlayer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (playerObj) => {
            dispatch(addAPlayerAC(playerObj))
        }
    }
}

const CreatePlayerContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerForm)


export default CreatePlayerContainer;