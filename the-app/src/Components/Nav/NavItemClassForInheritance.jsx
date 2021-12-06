import React from 'react'
import { NavLink } from 'react-router-dom'
import stylesNavItemClass from './NavItemClassForInheritance.module.css'
import PropTypes from 'prop-types'


class NavItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {mouseIsOver: false};
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ mouseIsOver: !this.state.mouseIsOver});      
    } 

    handleMouseLeave() {
        this.setState({ mouseIsOver: !this.state.mouseIsOver});      
    } 


    render() {

        return (
            <div
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                className={`${stylesNavItemClass.navItem} ${this.state.mouseIsOver ? stylesNavItemClass.hovered : stylesNavItemClass.notHovered}`}
            >   
                <NavLink to = {this.props.apiAddress}  className = {({isActive}) => {return isActive ? stylesNavItemClass.active : stylesNavItemClass.link} }>  
                    <h4> {this.props.children} </h4>
                </NavLink>
            </div>

        )
    }
}

NavItem.propTypes = {
    apiAddress: PropTypes.string.isRequired
  };
 
export default NavItem; 