import React from 'react'
//import NavPlayers from './Players'
//import NavTeams from './Teams'
import NavItem from './NavItemClassForInheritance'
import { NavLink } from 'react-router-dom'
import stylesOptions from './Options.module.css'

class Options extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {

        return (

            <div className={stylesOptions.navigation}>

                <NavItem apiAddress='/home'>
                   Home
                </NavItem>

                <NavItem apiAddress='/players'>
                    Players
                </NavItem>


                <NavItem apiAddress='/teams'>
                    Teams
                </NavItem>

                <NavItem apiAddress='/tournaments'>
                    Tournaments
                </NavItem>

                <NavItem apiAddress='/dogs'>
                    Dogs
                </NavItem>

                <NavItem apiAddress='/create'>
                    Create
                </NavItem>

            </div>
        )
    }
}

export default Options;