import React from 'react';
import styles from './RegisterLogin.module.css'
import { connect } from 'react-redux';
import { logoutUserTC } from '../../State/CurrentUserReducer';
import { NavLink } from 'react-router-dom';

class RegisterLogin extends React.Component {   

    render() {
        return (
            this.props.isLoggedIn 
                ?  null
                : <div className={styles.registerLogin}>
                    <NavLink to={`/login`}><button className={styles.thumb}> Login </button> </NavLink>
                    <NavLink to={`/registration`}> <button className={styles.thumb}> Sign up </button> </NavLink>
                </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
    }

}


export default connect(mapStateToProps, {logoutUserTC})(RegisterLogin);

