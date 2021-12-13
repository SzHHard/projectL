import React from 'react';
import { Field } from 'redux-form';
import styles from './FormCategories.module.css'

const FormCategories = (props) => {


    return (
        <div>
            {props.categories.map((cat, index) => {
                return <span key = {index} className={styles.category}> {cat} </span>
            })}
        </div>
    )
}

export default FormCategories;