import React from "react";
import style from "./About.module.css";
import { FaGithub,FaLinkedin } from "react-icons/fa";



export default function About(){
    return (
        <div className={style.about}>
            <p>Mi nombre es Carlos Aaron Benites Acevedo, me gusta mucho la tecnología y en particular, PROGRAMAR. Me considero muy resiliente y curioso, con gran iniciativa e inclinación al trabajo en equipo </p>

            <div className={style.icons}>
                <a href="https://github.com/Lewno"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/carlos-aaron-benites-acevedo-8925b5263/"><FaLinkedin/></a>
            </div>
        </div>
    );
}