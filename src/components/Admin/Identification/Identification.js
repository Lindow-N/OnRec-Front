import React from 'react';
import styles from "./Identification.module.css";
import Navbar from '../../NavBar/NavBar';



class Identification extends React.Component {

  state = {
    Login : "",
    password: "",
    store:null,
  }


  Gologin = (e) => {
    e.preventDefault();

    let Erreur = document.getElementById('Erreur'); 

    if (this.state.Login === "ter" && this.state.password === "ter" ) {

      let admin ="admin";
      sessionStorage .setItem('admin', admin);
      document.location.href = '/Admin/Réalisation';

    }
    else {
      Erreur.style.display ='block';
      Erreur.style.color ='#DA0037';
    }

  }

  render() {
    return(
<>
<Navbar></Navbar>


<div className={styles.MainContainer}>

                  <form className={styles.Form} onSubmit={this.Gologin}>
                    
                      <input className={styles.inputContact} type="text" name="Login" placeholder="Login" required="required" id="Login" maxLength="60"
                      onChange={(event) => this.setState({Login:event.target.value})}
                      value={this.state.Login} 
                      />

                      <input className={styles.inputContact} type="password" name="Password" placeholder="Mot de passe" required="required" id="password" maxLength="60"
                      onChange={(event) => this.setState({password:event.target.value})} 
                      value={this.state.password}/>

                      <p className={styles.ErreurAdmin} id="Erreur">Login ou Mdp invalide</p>

                      <button className={styles.Badmin} type="submit" value="Connexion" >Se connecter</button> 

                  </form>


</div>
            
          
        
      

  

</>
    ) 
  }
}

export default Identification;