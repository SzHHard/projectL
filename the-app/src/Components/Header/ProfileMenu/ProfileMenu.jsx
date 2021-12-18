import React, { useEffect, useRef} from 'react';
import styles from './ProfileMenu.module.css';
import { NavLink } from 'react-router-dom'

const ProfileMenu = (props) => {

    let menuRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target) && props.profileImgRef.current !== event.target) {
                props.setIsActive(false)
            }
        }
        document.addEventListener('mousedown', handler)
        
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })


    return (
        <div tabIndex="0" ref={menuRef} className={`${styles.profileMenu} ${props.isActive ? styles.active : ''} `}>
            <div   className={styles.profileMenuItem}>
                <NavLink to='/account'> <h5>Account</h5> </NavLink>
            </div>
        </div>
    )
}

export default ProfileMenu;