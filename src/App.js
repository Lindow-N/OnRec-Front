import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import ScrollToTop from './containers/Router/GoTop';

import Accueil from "../src/components/Accueil/Accueil";
import PrestationsTarifs from "../src/components/PrestationsTarifs/PrestationsTarifs";
import Présentation from "../src/components/Présentation/Présentation";
import Contact from "../src/components/Contact/Contact";
import PrivateRoute from './containers/Router/Admin'; 




function App () {
 

 


    return (
    
      
      <BrowserRouter>
      <ScrollToTop>
      <Route exact  path="/" component={Accueil}></Route>
      <Route exact  path="/PrestationsTarifs" component={PrestationsTarifs}></Route>
      <Route exact  path="/Présentation" component={Présentation}></Route>      <Route exact  path="/Contact" component={Contact}></Route>
      
      </ScrollToTop>
      
      </BrowserRouter>
     
    
    )
  }


export default App