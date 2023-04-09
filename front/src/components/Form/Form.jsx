import { useState } from "react";
import validation from "./Validation";
import './style.css'

const Form = ({login}) =>{

    const [userData,SetUserData] = useState({
        username : "",
        password : ""
    });

    const [errors,SetErrors] = useState({
        username : "",
        password : ""
    });

    const handleInputChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;

        SetUserData({...userData, [property] : value});
        SetErrors(validation({...userData, [property] : value},errors));
    };

    const submitHandler = (event) =>{
        event.preventDefault();
        login(userData);
    };

    return(
        <div className="container">
            <div className="login">
            <h2 className="title">LOGIN</h2>
            <form onSubmit={submitHandler}>
                <div className="container-line">
                    <label className="name-line" htmlFor="username">Username:</label>
                    <input className={!userData.username ? "imput-line" : errors.username ? "error" : "success"} type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                    <span className="validation">{errors.username}</span>
                </div>
                <div className="container-line">
                    <label className="name-line" htmlFor="password">Password:</label>
                    <input className={!userData.password ? "imput-line" : errors.password ? "error" : "success"}  type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                    <span className="validation">{errors.password}</span>
                </div>
                <div>
                <button className="button-login" type="submit">LOGIN</button>
                </div>
            </form>
            </div>
        </div>
        
    );
};

export default Form;

