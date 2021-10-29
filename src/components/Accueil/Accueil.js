import React from 'react';
import styles from "./Accueil.module.css";
import {NavLink} from 'react-router-dom';
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

import Logo from "./Img/Capwwture-removebg-preview (1).png";
import Insta from "./Img/1085-removebg-preview.png";
import ImgContainer3 from "./Img/about.png";
import Mic from "./Img/iconmonstr-microphone-5-240.png";
import Mix from "./Img/iconmonstr-control-panel-9-240.png";
import Dist from "./Img/iconmonstr-disc-5-240.png";
import Instru from "./Img/iconmonstr-party-15-240.png";
import Mail from "./Img/iconmonstr-email-2-240.png";

class Accueil extends React.Component {
  render() {
    
    return(
<>

  <div className={styles.HeaderContainer}>
    <img src={Logo} className={styles.Logo} alt="Logo ON REC"/>
  </div>

  <Navbar></Navbar>

  <div className={styles.PresentationContainer}>

    <div className={styles.PresentationContainer2}>

      <h1>ON REC</h1>
      <a href="https://www.instagram.com/sethguekofficiel/?hl=fr"><img className={styles.Insta} src={Insta} alt="Logo instagram"/></a>
      <p className={styles.Paccueil}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquam impedit, cumque magnam praesentium qui non ?</p>
      <a className={styles.LienContainer2} href="/Présentation">
        <button className={styles.buttonContainer2}>LIRE LA SUITE</button>
      </a>

    </div>

    <div className={styles.PresentationContainer3}>
      <img className={styles.ImgContainer3} src={ImgContainer3} alt="Photo"/>
    </div>

  </div>

    <div className={styles.PrestationContainer}>

      <h1 className={styles.PrestationContainerh1}>PRESTATION</h1>

      <div className={styles.PrestationContainer2}>

        <div className={styles.PrestationContainer3}>
          <img className={styles.PrestationImg} src={Mic} alt="Logo Micro"/>
          <h2>ENREGISTREMENT</h2>
          <p className={styles.Paccueil}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero expedita nisi quas pariatur</p>
        </div>

        <div className={styles.PrestationContainer3}>
          <img className={styles.PrestationImg} src={Mix} alt="Logo Mixage"/>
          <h2>MIXAGE</h2>
          <p className={styles.Paccueil}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero expedita nisi quas pariatur</p>
        </div>

        <div className={styles.PrestationContainer3}>
          <img className={styles.PrestationImg} src={Dist} alt="Logo Distribution"/>
          <h2>DISTRIBUTION</h2>
          <p className={styles.Paccueil}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero expedita nisi quas pariatur</p>
        </div>

        <div className={styles.PrestationContainer3}>
          <img className={styles.PrestationImg} src={Instru} alt="Logo Instrumentale"/>
          <h2>INSTRUMENTALE</h2>
          <p className={styles.Paccueil}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero expedita nisi quas pariatur</p>
        </div>

      </div>
    </div>

      <div className={styles.ContactContainer}>
      <NavLink to="/Contact" exact>
      <img src={Mail} alt="logo mail"/>
        <h3>CONTACTEZ-NOUS</h3>
      </NavLink>
      </div>

<Footer></Footer>
</>
    ) 
  }
}

export default Accueil;