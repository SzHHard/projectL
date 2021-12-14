import React from 'react'
import Filters from './Filters/Filters';
//import NavPlayers from './Players'
//import NavTeams from './Teams'
import NavItem from './NavItemClassForInheritance'
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

                <NavItem apiAddress='/users'>
                    Users
                </NavItem>

                <NavItem apiAddress='/create'>
                    Create
                </NavItem>

                <Filters />

            </div>
        )
    }
}

export default Options;