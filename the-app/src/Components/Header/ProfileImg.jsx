import React from 'react'
import szh from '../../images/szh.jpg'
import StylesProfileImg from './ProfileImg.module.css'

class ProfileImg extends React.Component {
    render() {
        return (
            <div className = {StylesProfileImg.profileImg}>
                <img src={szh}/>
            </div>
        )
    }
}

export default ProfileImg;