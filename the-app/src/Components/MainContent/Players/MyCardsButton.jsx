import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './MyCardsButton.module.css'

const MyCardsButton = (props) => {

    return (
        <NavLink to='/myCards' className={styles.link}> My cards </NavLink>
    )
}

export default MyCardsButton;