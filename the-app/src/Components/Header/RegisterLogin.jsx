import React from 'react';
import styles from './RegisterLogin.module.css' 
import {createUserTC} from '../../State/CurrentUserReducer';
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom';

class RegisterLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.registerLogin}>
                <button className={styles.thumb}> Login </button>
                <NavLink to={`/registration`}> <button className={styles.thumb}> Sign up </button> </NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default RegisterLogin;
// export default connect(mapStateToProps, {createUserTC})(RegisterLogin);