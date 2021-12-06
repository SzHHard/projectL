import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {createUserTC} from '../../State/CurrentUserReducer'
import { connect } from "react-redux";

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(values) {
        debugger;
        this.props.createUserTC(values.email, values.password);
    }

    render() {

        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="secondName">Second Name: </label>
                    <Field name="secondName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <Field name="email" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="password"> Password: </label>
                    <Field name="password" component="input" type="text" />
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

    }
}


export default connect(mapStateToProps, {createUserTC})(RegistrationForm);


