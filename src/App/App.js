import React from 'react';
import {Layout, Landing} from '../Pages';
import { Routes, Route } from 'react-router-dom';
import AboutUs from '../Pages/About us'
import Details from '../Pages/Details'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

function App() {
  return (
    <div className="App">
          <Layout className="App">

            <Routes>

          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path={`/details/:id`} element={<Details />}/>
          <Route path='/SignIn' element={<SignIn/>}/>
          <Route path='SignUp' element={<SignUp/>}/>

            </Routes>
    
 
    </Layout>
    </div>
  );
}

export default App;
