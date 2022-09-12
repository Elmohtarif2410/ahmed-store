import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const ContextAdmin = React.createContext();

const AdminContext = (props) => {

    const redirect = useNavigate();

    const adminUsername = "ahmed";
    const adminPassword = "ahmed";
    const [logged, setLogged] = useState(true);


    const loginHandel = (e, user, pass) => {

        e.preventDefault();

        if (user === adminUsername && pass === adminPassword) {

            setLogged(true);

            redirect("/dashboard")

        } else {

            alert("username or password is wrong ")
        }
    }

    const logoutHandel = () => {

        setLogged(false);

        redirect("/")
    }
    
    return (  
        <ContextAdmin.Provider value={{adminUsername, adminPassword, logged, loginHandel, logoutHandel}}>
            {props.children}
        </ContextAdmin.Provider>
    );
}

export default AdminContext;