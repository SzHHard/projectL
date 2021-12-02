import React from 'react'
import PropTypes from 'prop-types'
import stylesSwitch from './Switch.module.css'
import {NavLink} from 'react-router-dom'


class Switch extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className={stylesSwitch.switch}>
                <NavLink  to={`/create/${this.props.name}`}   className={( {isActive} ) => { return isActive ? stylesSwitch.active : stylesSwitch.link}}> {this.props.name} </NavLink>
            </div>
        )
    }
}

Switch.propTypes = {
    name: PropTypes.string.isRequired
  };

export default Switch;