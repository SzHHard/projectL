import React from 'react'
import Filters from './Filters/Filters';
//import NavPlayers from './Players'
//import NavTeams from './Teams'
import NavItem from './NavItemClassForInheritance'
import stylesOptions from './Options.module.css'
import { useLocation } from 'react-router-dom';

const Options = (props) => {

    let location = useLocation();

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

            {location.pathname === '/players' && <Filters />}

        </div>
    )

}

export default Options;