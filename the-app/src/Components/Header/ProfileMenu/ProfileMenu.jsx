import React, { useEffect, } from 'react';
import styles from './ProfileMenu.module.css';
import { NavLink } from 'react-router-dom'

const ProfileMenu = (props) => {

    useEffect(() => {

        if (props.isActive) {
            props.menuRef.current.focus();
        }
    }, [props.isActive])


    const closeMenu = () => {
        props.setIsActive(false);
    }

    return (
        <div tabIndex="0" ref={props.menuRef} onBlur={closeMenu} className={`${styles.profileMenu} ${props.isActive ? styles.active : ''} `}>
            <div className={styles.profileMenuItem}>
                <NavLink to='/account'> <h5>Account</h5> </NavLink>
            </div>
        </div>
    )
}

export default ProfileMenu;