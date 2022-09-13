// import main packges 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

export const ContextAdmin = React.createContext();

const AdminContext = (props) => {

    const redirect = useNavigate();
    const MySwal = withReactContent(Swal);

    const adminUsername = "ahmed";
    const adminPassword = "ahmed";
    const [logged, setLogged] = useState(true);


    const loginHandel = (e, user, pass) => {

        e.preventDefault();

        if (user === adminUsername && pass === adminPassword) {

            setLogged(true);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'login success.',
                showConfirmButton: false,
                timer: 1500
            })

            redirect("/dashboard")

        } else {

            Swal.fire({
                icon: 'error',
                title: 'Username and password wrong.',
                showConfirmButton: false,
                timer: 1500
            })
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