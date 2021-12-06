
import {addATeamAC} from "../../../../State/TeamsReducer";
import TeamForm from "./CreateTeam";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (teamObj) => {
            dispatch(addATeamAC(teamObj))
        }
    }
}

const CreateTeamContainer = connect(mapStateToProps, mapDispatchToProps)(TeamForm)

export default CreateTeamContainer;