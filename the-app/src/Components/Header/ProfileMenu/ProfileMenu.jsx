import React, { useEffect, useRef } from 'react';
import styles from './ProfileMenu.module.css';
import { NavLink } from 'react-router-dom'
import { logoutUserTC } from '../../../State/CurrentUserReducer';
import { connect } from 'react-redux';


const ProfileMenu = (props) => {

    let menuRef = useRef();




    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target) && props.profileImgRef.current !== event.target) {
                props.setIsActive(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    function handleLogoutClick() {
        props.logoutUserTC()
    }

    return (
        <div tabIndex="0" ref={menuRef} className={`${styles.profileMenu} ${props.isActive ? styles.active : ''} `}>
            <div className={styles.profileMenuItem}>
                <NavLink to='/account'> <h5>Account</h5> </NavLink>
            </div>
            <div>
                <button onClick={handleLogoutClick} className={styles.profileMenuItem}> Logout </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
    }

}


export default connect(mapStateToProps, { logoutUserTC })(ProfileMenu);
