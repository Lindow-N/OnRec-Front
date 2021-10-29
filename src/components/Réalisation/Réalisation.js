import React from 'react';
import axios from 'axios';
import "./Réalisation.css";
import Navbar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';


class Réalisation extends React.Component {

  state = {
    Realisation: [],
    error: null,
    first:Number,
  };

  componentDidMount = async () => {

    try {
      const response = await axios.get('http://localhost:1337/Realisations');
        console.log(response);
        this.setState({ Realisation: response.data }); 
    } catch (error) {
      this.setState({ error });
    }
    

    const data = this.state.Realisation;

    for (var i = data.length -1; i > data.length-11 ; i--) {
      console.log(data.id);

      var location = document.getElementById('PrincipalDiv');

      var mydiv = document.createElement('div');
      var mya = document.createElement('a');
      var myh2 = document.createElement('h2');
      var myp = document.createElement('p');

      mydiv.setAttribute("class", "Rdiv");
      myh2.setAttribute("class", "Rh2");
      mya.setAttribute("class", "Ra");
      myp.setAttribute("class", "Rp");

      myh2.textContent = data[i].Titre;
      mya.href = data[i].Lien;
      myp.textContent = data[i].Texte;

      
      mydiv.appendChild(mya);
      mya.appendChild(myh2);
      mydiv.appendChild(myp);
      

      location.appendChild(mydiv);

    }
    this.setState({first:data.length-11})
  }

  
  AddData = () => {

    const data = this.state.Realisation;
    var test = this.state.first;

    for(let j = test; j > test -10;j--){

     if (j===-1){
        document.getElementById('btnNext').style.display="none";
      
      break;
     }
     else {
    
this.setState({first:test-10})


      var location = document.getElementById('PrincipalDiv');

      var mydiv = document.createElement('div');
      var mya = document.createElement('a');
      var myh2 = document.createElement('h2');
      var myp = document.createElement('p');

      mydiv.setAttribute("class", "Rdiv");
      myh2.setAttribute("class", "Rh2");
      mya.setAttribute("class", "Ra");
      myp.setAttribute("class", "Rp");

      myh2.textContent = data[j].Titre;
      mya.href = data[j].Lien;
      myp.textContent = data[j].Texte;

      
      mydiv.appendChild(mya);
      mya.appendChild(myh2);
      mydiv.appendChild(myp);
      

      location.appendChild(mydiv);

     }

    }
  
  }

  render() {

    return(
<>
<Navbar></Navbar>

<div className="backgroundPresentation">

<div className="PrincipalDiv" id="PrincipalDiv">
      

      
</div>

<button id="btnNext" className="btnNext" onClick={this.AddData}>Voir plus</button>

</div>

<Footer></Footer>

</>
    ) 
  }
}

export default Réalisation;