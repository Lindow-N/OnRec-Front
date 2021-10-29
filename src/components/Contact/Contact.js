import React, { useRef } from 'react'
import styles from "./Contact.module.css";
import emailjs from 'emailjs-com';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Contact = () => {
  const form = useRef();
  
  const isMail = () => {

    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let mail = document.getElementById('ErreurMail')
    let mailTest = form.current[3].value;

    if (form.current[3].value !== ''){

    if (mailTest.match(regex)) {

      mail.style.display='none';
      return true;

    } else{
      mail.style.display='block';
      mail.style.color ='#DA0037';
      return false;
    }

  }else{
    return false;
  }
  }

  const sendEmail = (e) => {
    e.preventDefault();
      
let Erreur = document.getElementById('Erreur'); 

      if (form.current[0].value !== '' && form.current[1].value && isMail() && form.current[4].value !== '') {
        
      emailjs.sendForm('service_3ndg0bf', 'template_bwg0lf8', form.current, 'user_1PyR0vHqIcST3y6Y4UgQe')
      .then((result) => {
          console.log(result.text);
          document.getElementById("cform").reset();
          Erreur.style.display ='none';
          window.alert("Merci d’avoir pris le temps de nous contacter via notre formulaire.\nVotre message a bien été transmis à nos équipes, nous vous répondrons dans les plus brefs délais.");

      }, (error) => {
          console.log(error.text);
      });
    }else {
      Erreur.style.display ='block';
      Erreur.style.color ='#DA0037';
    }
  };

  return (

<>

    <Navbar></Navbar>

    <form ref={form} onSubmit={sendEmail} className={styles.contactForm} id="cform">
      <h1 className={styles.Ch1}>Contactez-nous</h1>
      <p className={styles.Erreur} id="Erreur">Veuillez remplir tous les champs</p>
      <div className={styles.formContent}>
      <input className={styles.inputContact} 
          type="text"
          id="Nom"
          name="Nom"
          placeholder="Nom"
          autoComplete="off"
        />
        <input className={styles.inputContact}
          type="text"
          id="Prenom"
          name="Prenom"
          placeholder="Prénom"
        />
        <input className={styles.inputContact}
          type="text"
          id="Telephone"
          name="Telephone"
          placeholder="Téléphone"
        />
       
         
          <input className={styles.inputContact} 
            type="mail"
            id="Email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            
          />
           <p id='ErreurMail' className={styles.ErreurMail}>Mail invalide</p>
    
       <textarea
          id="message"
          name="message"
          placeholder="MESSAGE"
        />
        <input id={styles.Envoyer}
        type="submit"
        value="Envoyer"
      />
      </div>
    </form>

<Footer></Footer>

    </>
  );
};


export default Contact;