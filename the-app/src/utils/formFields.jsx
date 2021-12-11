import React from 'react';
import styles from './formFields.module.css'


export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (


        <div className={styles.inputField + ' ' + (hasError ? styles.error : '')}>
            <label>{props.label}</label>
            <input {...input} {...props} />
            {hasError && <span>{' ' + meta.error + '!'}</span>}
        </div>
    )
}

export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (


        <div className={styles.inputField + ' ' + (hasError ? styles.error : '')}>
            <label>{props.label}</label>
            <textarea {...input} {...props} />
            {hasError && <span>{' ' + meta.error + '!'}</span>}
        </div>
    )
}

export const Select = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.inputField + ' ' + (hasError ? styles.error : '')}>
            <label>{props.label}</label>
            <select >

                <option></option>
                <option value="Top">Top</option>
                <option value="Jungle">Jungle</option>
                <option value="Mid">Mid</option>
                <option value="Bottom">Bottom</option>
                <option value="Support">Support</option>
            </select>
            {hasError && <span>{' ' + meta.error + '!'}</span>}
        </div>
    )
}