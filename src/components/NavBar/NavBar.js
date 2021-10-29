import React from 'react';
import styles from "./NavBar.module.css";
import {NavLink} from 'react-router-dom';


class NavBar extends React.Component {
  render() {
    return(
<>

<div className= {styles.navbar}>
  <NavLink to="/"  activeStyle={{ fontWeight:"bold" , fontSize:"28px" }} exact>ACCUEIL</NavLink>
  <NavLink to="/PrestationsTarifs" activeStyle={{ fontWeight:"bold", fontSize:"28px" }} exact>PRESTATIONS ET TARIFS</NavLink>
  <NavLink to="/Présentation" activeStyle={{ fontWeight:"bold", fontSize:"28px" }} exact>PRÉSENTATION</NavLink>
  <NavLink to="/Réalisation" activeStyle={{ fontWeight:"bold", fontSize:"28px" }} exact>NOS RÉALISATIONS</NavLink>
  <NavLink to="/Contact" activeStyle={{ fontWeight:"bold", fontSize:"28px" }} exact>CONTACT</NavLink>
</div>

</>
    ) 
  }
}

export default NavBar;