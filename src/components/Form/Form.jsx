import { useState } from "react";

import validation from "./Validation";

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
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <span>{errors.username}</span>
            </div>
            
            <div>
                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
                <span>{errors.password}</span>
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default Form;

