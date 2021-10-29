import React from 'react';
import styles from "./Footer.module.css";
import Logo from "../Accueil/Img/Capwwture-removebg-preview (1).png"
import Insta from "../Accueil/Img/1085-removebg-preview.png";


class Footer extends React.Component {
  render() {
    return(
<>

<div className= {styles.Footer}>
  <div className= {styles.FooterContainer}>
   <img className= {styles.ImgFooter} src={Logo} alt="Logo"/>
   <p className= {styles.PFooter}>MENTIONS LÉGALES - Copyright 2021 - Tous droit réservés</p>
  </div>

  <div className= {styles.FooterContainer2}>
  <a href="https://www.instagram.com/sethguekofficiel/?hl=fr"className={styles.FooterH3}>NOUS SUIVRE</a>
   
   <a href="https://www.instagram.com/sethguekofficiel/?hl=fr"><img className= {styles.InstaFooter} src={Insta} alt="Instagram"/></a>

  </div>
</div>

</>
    ) 
  }
}

export default Footer;