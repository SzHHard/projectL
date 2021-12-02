import React from 'react'
import szh from '../../images/logo.png'
import {NavLink} from 'react-router-dom'
import StylesLogo from './LogoToMainpage.module.css'

class Logo extends React.Component {
    render() {
        return (
            <NavLink to = {'/home'}>
            <div className = {StylesLogo.logo}>
                <img alt = {''} src = {szh} />
            </div>
            </NavLink>
        )
    }
}

export default Logo;