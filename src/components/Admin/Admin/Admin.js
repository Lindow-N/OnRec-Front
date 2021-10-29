import React from 'react';
import axios from 'axios';
import styles from "./Admin.module.css";
import Navbar from '../../NavBar/NavBar';
import Réalisation from '../../Réalisation/Réalisation';



class Admin extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modifiedData: {
        Titre: '',
        Texte: '',
        Lien:'',
      },
      Realisation: [],
      error: null,
    };
  }

  componentDidMount = async () => {

    try {
      const response = await axios.get('http://localhost:1337/Realisations');
        console.log(response);
        this.setState({ Realisation: response.data }); 
    } catch (error) {
      this.setState({ error });
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(prev => ({
      ...prev,
      modifiedData: {
        ...prev.modifiedData,
        [name]: value,
      },
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:1337/Realisations',
        this.state.modifiedData
      );
      document.getElementById("cform").reset();
      this.setState(
        {modifiedData: {
        Titre: '',
        Texte: '',
        Lien:'',
      },
      Realisation: [],
      error: null,});
      window.alert("formulaire envoyer");
      console.log(response);

    } catch (error) {
      this.setState({ error });
    }
  };

  
  render() {

    const { error, Realisation, modifiedData } = this.state;

    
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return(
<>
<Navbar></Navbar>


        <form onSubmit={this.handleSubmit}  className={styles.contactForm} id="cform">
        <div className={styles.formContent}>
          <h3>Réalisation</h3>
       
         
            
            <input
              type="text"
              name="Titre"
              onChange={this.handleInputChange}
              value={modifiedData.Titre}
              className={styles.inputContact}
              placeholder="Titre"
            />
       
           <input
              type="text"
              name="Lien"
              onChange={this.handleInputChange}
              value={modifiedData.Lien}
              className={styles.inputContact}
              placeholder="Lien"
            />

            <textarea
              type="text"
              name="Texte"
              onChange={this.handleInputChange}
              value={modifiedData.Texte}
              className={styles.textContact}
              placeholder="Texte"
            />
            
  

             <input id={styles.Envoyer}
              type="submit"
              value="Envoyer"
              />
          </div>
        </form>
     
          
        
      

  

</>
    ) 
  }
}

export default Admin;