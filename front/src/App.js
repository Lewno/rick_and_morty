import './App.css'
import Cards from './components/Card/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"

import { useEffect, useState } from 'react';

function App () {

  const [characters,SetCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access,SetAccess] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    !access && navigate("/");
  },[access]);

  const username = "aaron@gmail.com";
  const password = "carlosbenites";


  // funcion onSearch
  const onSearch = (id) =>{
    const URL_BASE = "http://localhost:3001" 
    

    if(characters.find(char => char.id === id)){
      return alert("Personaje Repetido");
    } 

    fetch(`${URL_BASE}/onsearch/${id}`)
    .then(response => response.json())
    .then(data=>{
      if(data.name){
        SetCharacters((oldChars) => [...oldChars,data]);
      } else{
        alert("Algo Salio Mal :(");
      }
    })
  };

  const onClose = (id) =>{
    SetCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      SetAccess(true);
      navigate("/home");
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Intenta con este email y contraseña',
        text: 'aaron@gmail.com && carlosbenites',
      })
    }
  }

  return (
    <div className='App'>
      <span className='titulo'>
            Rick <span>and</span> Morty
      </span>
      {pathname !== "/" && <Nav onSearch = {onSearch}/>} 
      <Routes>
        <Route path='/' element={<Form login ={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose = {onClose} />}
         />
         <Route path='/about' element={<About />} />
         <Route path='/favorites' element={<Favorites />} />
         <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
