import './App.css'
import Cards from './components/Card/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

function App () {

  // ------------- Ej --------------------------
  // const [users,SetUsers] = useState([{}]);

  // const searchUser = ({id}) => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //   .then((res) => res.json())
  //   .then((data) => SetUsers([...users,data])); // data es un objeto del  usuario
  // };

  //----------------- Hacer -------------------------
  const [characters,SetCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access,SetAccess] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    !access && navigate("/");
  },[access]);

  const username = "aaron@gmail.com";
  const password = "aaron1234567";


  // funcion onSearch
  const onSearch = (id) =>{
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const URL_BASE = "http://localhost:3001" 
    // const KEY = "d0ee1c6a7858.3c17c7ec92d4b8f6f0ae";

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
      alert("Credenciales incorrectas");
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
