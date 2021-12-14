import React, { useState } from 'react';
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

    let [Value, setValue] = useState('')

    const handleChange = (e) => {


        if (Value.includes(e.target.value)) {
            let newArr = Value.filter((val) => {
                return val !== e.target.value;
            })
            setValue(newArr)
        } else {
            setValue([...Value, e.target.value]);
        }

    }
        return (
            <div className={styles.inputField + ' ' + (hasError ? styles.error : '')}>
                <label>{props.label}</label>
                <select {...input} {...props} multiple={true} onChange={handleChange} value={[...Value]}  >

                    {/* <option value="-">-</option> */}
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

export const RankSelect = ({ input, meta, ...props }) => {
   
    const hasError = meta.touched && meta.error;

  

    
        return (
            <div className={styles.inputField + ' ' + (hasError ? styles.error : '')}>
                <label>{props.label}</label>
                <select {...input} {...props}   >

                    <option value="-">-</option>
                    <option value="Iron">Iron</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Master+">Master+</option>
                </select>
                {hasError && <span>{' ' + meta.error + '!'}</span>}
            </div>
        )
    
}