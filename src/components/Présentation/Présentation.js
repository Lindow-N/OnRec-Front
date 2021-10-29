import React from 'react';
import styles from "./Présentation.module.css";
import Navbar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';

import Ter from "./img/30443076_1640888259360177_2027751448825036800_n-modified.png";
import Flazbar from "./img/79354587_10212109782738993_5768654657832353792_n-modified.png";

class Présentation extends React.Component {
  render() {
    return(
<>

<Navbar></Navbar>

<div className={styles.backgroundPresentation}>

<div className={styles.ContainerPresentation}>
<h1 className={styles.h1Container}>L´Équipe</h1>

<p className={styles.pContainer}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex culpa rerum facilis debitis doloribus? Eveniet consectetur odio cum est, molestias, quidem sed nostrum at perspiciatis ab in aperiam, eos reprehenderit!
Velit vero in quod? Aliquam, iure vel quod harum sequi, in nemo est repudiandae eum tenetur veniam nulla iusto enim ab alias repellat non ratione asperiores labore quis officia commodi!
Doloremque explicabo architecto esse neque veritatis ex libero enim odit illum at quos, illo repellendus facilis alias rem quibusdam dolorem quod harum maxime delectus, optio similique, non possimus necessitatibus? Cupiditate.</p>

<div className={styles.SContaineur1}>
  <div className={styles.Pcimg}>
    <img src={Ter} className={styles.ImgT}></img>
  </div>

  <div className={styles.TexteContaineur}>
    <h2>Terence Dos Santos</h2>
    <h3>Taf</h3>
    <p className={styles.pContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, expedita commodi sunt dolores, impedit sint necessitatibus exercitationem, autem iusto inventore suscipit aliquam. Modi eius sapiente debitis officia veritatis, a voluptate!s</p>
  </div>
</div>

<div className={styles.SContaineur2}>
  <div className={styles.TContaineur2}>
    <h2>Terence Dos Santos</h2>
    <h3>Taf</h3>
    <p className={styles.pContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, expedita commodi sunt dolores, impedit sint necessitatibus exercitationem, autem iusto inventore suscipit aliquam. Modi eius sapiente debitis officia veritatis, a voluptate!s</p>
  </div>

  <div className={styles.Pcimg}>
    <img src={Flazbar} className={styles.ImgT2}></img>
  </div>
</div>

</div>

</div>
<Footer></Footer>

</>
    ) 
  }
}

export default Présentation;