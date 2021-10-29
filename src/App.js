import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import ScrollToTop from './containers/Router/GoTop';
import useAdmin from'./containers/Router/Admin';

import Accueil from "../src/components/Accueil/Accueil";
import PrestationsTarifs from "../src/components/PrestationsTarifs/PrestationsTarifs";
import Présentation from "../src/components/Présentation/Présentation";
import Réalisation from "../src/components/Réalisation/Réalisation";
import Contact from "../src/components/Contact/Contact";
import Identification from "../src/components/Admin/Identification/Identification";
import Admin from "../src/components/Admin/Admin/Admin";
import PrivateRoute from './containers/Router/Admin'; 

function App () {
 

  const isAuthenticated = localStorage.getItem('admin');;


    return (
    
      <BrowserRouter>
      <ScrollToTop>
      <Route exact  path="/" component={Accueil}></Route>
      <Route exact  path="/PrestationsTarifs" component={PrestationsTarifs}></Route>
      <Route exact  path="/Présentation" component={Présentation}></Route>
      <Route exact  path="/Réalisation" component={Réalisation}></Route>
      <Route exact  path="/Contact" component={Contact}></Route>
      <Route exact  path="/Admin" component={Identification}></Route>
      <PrivateRoute exact  path="/Admin/Réalisation" component={Admin} isAuthenticated={isAuthenticated} ></PrivateRoute>
      </ScrollToTop>
      
      </BrowserRouter>
     
    
    )
  }


export default App