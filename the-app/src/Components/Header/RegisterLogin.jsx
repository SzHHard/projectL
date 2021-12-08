import React from 'react';
import styles from './RegisterLogin.module.css'
import { connect } from 'react-redux';
import { logoutUserTC } from '../../State/CurrentUserReducer';
import { NavLink } from 'react-router-dom';

class RegisterLogin extends React.Component {

    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }
    handleLogoutClick() {
        this.props.logoutUserTC()
    }

    render() {
        return (
            this.props.isLoggedIn ?
                <div>
                    <button onClick={this.handleLogoutClick} className={styles.thumb}> Logout </button> 
                </div>
                : <div className={styles.registerLogin}>
                    <NavLink to={`/login`}><button className={styles.thumb}> Login </button> </NavLink>
                    <NavLink to={`/registration`}> <button className={styles.thumb}> Sign up </button> </NavLink>
                </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
    }

}


export default connect(mapStateToProps, {logoutUserTC})(RegisterLogin);

