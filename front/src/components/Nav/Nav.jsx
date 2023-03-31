import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav(props){
    return (
        <div className={style.nav} >
          <div className={style.options}>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
          <SearchBar onSearch = {props.onSearch}
        /> 
        </div>
    );
}