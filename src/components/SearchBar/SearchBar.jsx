import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) { // {onSearch} es destructuring

    const [id,setId] = useState("");
   
   const handleChange = (event) =>{
      setId(event.target.value);
   };
// 
   return (
      <div className={style.container}>
         <input type='search' onChange = {handleChange} /> 
         <button className={style.add} onClick={() => onSearch(id)}>Agregar</button> 
      </div>
   );
}
