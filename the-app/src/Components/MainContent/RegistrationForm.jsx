import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {createUserTC} from '../../State/CurrentUserReducer'
import { connect } from "react-redux";
import { email, maxLengthCreator, minLengthCreator, required } from '../../utils/fieldValidation';
import { Input } from '../../utils/formFields';
import {Navigate} from 'react-router-dom';


const maxLength32 = maxLengthCreator(32);
const minLength4 = minLengthCreator(4);

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(values) {
        this.props.createUserTC(values.profileName, values.email, values.password);
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        return isLoggedIn ? <Navigate to='/home' replace={true} /> 
        :(
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div>
                    <Field name="profileName" label = 'Profile name: ' component={Input} type="text" />
                </div>
                
                <div>
                    <Field name="email" label = 'Email: ' component={Input} type="text"
                    validate = {[required, email]} />
                </div>
                <div>
                    <Field label = 'Password: ' name="password" component={Input} type="password" 
                    validate = {[required, minLength4, maxLength32]}/>
                </div>
                <div>
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}



RegistrationForm = reduxForm({
    form: 'registration'
})(RegistrationForm);

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
    }
}


export default connect(mapStateToProps, {createUserTC})(RegistrationForm);


