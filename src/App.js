import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Form from "./components/Form"
import Welcomepage from './components/Welcomepage';
import { useState } from 'react';

function App() {
  const[image,setImage]=useState();
  const [name,setName]=useState();
  const[designation,setDes]=useState();
  const[logo,setLogo]=useState();
 
  return (
    
    <div className="App">
         <Routes>
            <Route path="/" element= {<Form image={image} name={name} designation={designation} logo={logo} setImage={setImage} setName={setName} setLogo={setLogo} setDes={setDes}/>} />
            <Route path="/Welcomepage" element= {<Welcomepage image={image} name={name} designation={designation} logo={logo} />} />
      </Routes>
    </div>
  );
}

export default App;
