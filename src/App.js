import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import  Form  from "./Component/Form";
import Card from "./Component/Card";
import CardFb from "./Component/CardFb";
import CardInsta from "./Component/CardInsta";
import CardLinkedin from "./Component/CardLinkedin";
import { useState } from 'react';
import Choice from './Component/Choice';

function App() {
 const[image,setImage]=useState('');
  const [name,setName]=useState('');
  const[designation,setDes]=useState('');
  const[logo,setLogo]=useState('');
  const[selectedSize, setSelectedSize]=useState('');
  const [cardWidth,setCardWidth]=useState('');
  const[cardHeight,setCardHeight]=useState('');
 
  return (
    
    <div className="App ">
         <Routes>
            <Route path="/" element= {<Form image={image} name={name} designation={designation} logo={logo} setImage={setImage} setName={setName} 
            setLogo={setLogo} setDes={setDes} selectedSize={selectedSize} setSelectedSize={setSelectedSize}
            cardHeight={cardHeight} setCardHeight={setCardHeight} cardWidth={cardWidth} setCardWidth={setCardWidth} />} />
             <Route path="/choice" element= {<Choice image={image} name={name} designation={designation} logo={logo}  cardHeight={cardHeight} cardWidth={cardWidth}/>} />
            <Route path="/Welcomepage" element= {<Card image={image} name={name} designation={designation} logo={logo}  cardHeight={cardHeight} cardWidth={cardWidth}/>} />
            <Route path="/insta" element= {<CardInsta image={image} name={name} designation={designation} logo={logo}  cardHeight={cardHeight} cardWidth={cardWidth}/>} />
            <Route path="/fb" element= {<CardFb image={image} name={name} designation={designation} logo={logo}  cardHeight={cardHeight} cardWidth={cardWidth}/>} />
            <Route path="/linkedin" element= {<CardLinkedin image={image} name={name} designation={designation} logo={logo}  cardHeight={cardHeight} cardWidth={cardWidth}/>} />
      </Routes>
    </div>
  )
};
export default App;
