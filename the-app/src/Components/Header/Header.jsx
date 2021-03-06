import React from 'react'
import GamesSelect from './GamesSelect'
import Search from './Search'
import Logo from './LogoToMainpage'
import ProfileImg from './ProfileImg'
import StylesHeader from './Header.module.css'
import RegisterLogin from './RegisterLogin'

 export class Header extends React.Component {

    render() {

        return (
            <header className = {StylesHeader.header}>
                <Logo />
                <GamesSelect />
                <Search /> 
                <RegisterLogin />
                <ProfileImg />
            </header>
        )
    }
}
// export default Header;