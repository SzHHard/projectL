import React from 'react'
import { NavLink } from 'react-router-dom'
import stylesNavItemClass from './NavItemClassForInheritance.module.css'
import PropTypes from 'prop-types'

import {
    Link,
    useMatch,
    useResolvedPath }
     from "react-router-dom";

        //I don't understand how exactly this function work when using it first time. Shouldn't forget to know.   (upd) IT TURNED OUT I DIDN'T NEED IT
// function CustomLink({ children, to, ...props }) {
//     let resolved = useResolvedPath(to);
//     let match = useMatch({ path: resolved.pathname, end: true });
  
//     return (
//       <div>
//         <Link  
//           style={
//                 {color: match ? "#ffb800" : "black",
//                  textDecoration: match ? ' underline' : ' none' }
//                 }
//           to={to}
//           {...props}
//         >
//           {children}
//         </Link>
//       </div>
//     );
//   }



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