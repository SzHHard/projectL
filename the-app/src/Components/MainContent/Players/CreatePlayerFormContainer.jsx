
import { createPlayerCardTC } from '../../../State/PlayersReducer';
import { connect } from 'react-redux';
import CreatePlayerForm from './CreatePlayerForm';


const CreatePlayerFormContainer = (props) => {



    const submit = (values) => {
        console.log(values);
        props.createPlayerCardTC(values)
    }




    return (
        <CreatePlayerForm action={'create'}/>
    )



}

const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps, { createPlayerCardTC })(CreatePlayerFormContainer);