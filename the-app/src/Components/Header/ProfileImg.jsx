import React from 'react'
import { useState, useRef } from 'react';
import szh from '../../images/szh.jpg'
import StylesProfileImg from './ProfileImg.module.css'
import ProfileMenu from './ProfileMenu/ProfileMenu';

const ProfileImg = (props) => {

    const menuRef = useRef();
    const profileImgRef = useRef();

    let [isActive, setIsActive] = useState(false);


    function toggleProfileMenu() {
        setIsActive(!isActive)
    }


    return (
        <div className={StylesProfileImg.profileImg}>
            <img tabIndex={0} ref={profileImgRef} onMouseDown = {toggleProfileMenu} alt={'profileImg'} src={szh} />
            <ProfileMenu menuRef={menuRef} profileImgRef={profileImgRef} setIsActive={setIsActive} isActive={isActive} />
        </div>
    )

}

export default ProfileImg;