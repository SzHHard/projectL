import React from 'react';
import { reduxForm } from 'redux-form';
import {loginUserTC} from '../../State/CurrentUserReducer'
import { connect } from "react-redux";
import {Navigate} from 'react-router-dom';
import LoginForm from './LoginForm';


class LoginFormContainer extends React.Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(values) {
        this.props.loginUserTC(values.email, values.password);

    }

    render() {
        
        const isLoggedIn = this.props.isLoggedIn;
        
        return  isLoggedIn 
        ? <Navigate to='/home' replace={true} />
        : <LoginForm />
    }
}



LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
    }
}

export default connect(mapStateToProps, {loginUserTC})(LoginFormContainer);

