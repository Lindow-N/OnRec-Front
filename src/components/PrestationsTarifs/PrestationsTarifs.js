import React from 'react';
import styles from "./PrestationsTarifs.module.css";
import Navbar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';


class PrestationsTarifs extends React.Component {
  render() {
    return(
<>
<Navbar></Navbar>

<div className={styles.Prestationscontainer}>

<div className={styles.Prestationscontainerp}><p className={styles.PP2}>Enregistrement</p></div>

  

      <div className={styles.Pcontainer2}>
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP}>1 Heure</p></div> <div className={styles.LigneEnd}><p className={styles.PP}>15€</p></div></div> 
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP}>2 Heures</p></div><div className={styles.LigneEnd}><p className={styles.PP}>35€</p></div></div> 
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP}>Un clip</p></div> <div className={styles.LigneEnd}><p className={styles.PP}>115€</p></div></div> 
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP}>Une après midi</p></div> <div className={styles.LigneEnd}><p className={styles.PP}>225€</p></div></div> 
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP}>Une soirée</p></div> <div className={styles.LigneEnd}><p className={styles.PP}>500€</p></div>   </div> 
      </div>


  

      <div className={styles.Pcontainer3}>
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP2}>Distribution</p></div> <div className={styles.LigneEnd}><p className={styles.PP2}>55€</p></div></div> 
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP2}>Mixage / Maxering</p></div> <div className={styles.LigneEnd}><p className={styles.PP2}>555€</p></div></div> 
       <div className={styles.LigneContainer}><div className={styles.LigneStart}><p className={styles.PP2}>Instrumental</p></div> <div className={styles.LigneEnd}><p className={styles.PP2}>Sur Devis</p></div>   </div> 
      </div>
      
      

</div>

<Footer></Footer>

</>
    ) 
  }
}

export default PrestationsTarifs;