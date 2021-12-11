import React, { useState } from 'react';
import styles from './ModalWindow.module.css';

const ModalWindow = (props) => {

 

    return (

        <div className={styles.modalWindow + ' ' + (props.isActive ? styles.active : '')} onClick={() => { props.setIsActive(false) }}>
            <div className={styles.modalWindowContent + ' ' + (props.isActive ? styles.active : '')} onClick={e => e.stopPropagation()} >
                {props.children}
            </div>
        </div>
    )

}

export default ModalWindow;