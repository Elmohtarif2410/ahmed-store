import React, {useState} from 'react';

const Login = (props) => {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    return ( 
        <>
            <section className='login-page' style={{minHeight: "calc(100vh - 148px)"}}>
                <h1 className='heading-page'>Login</h1>
                <form className='my-5' onSubmit={(e) => props.loginHandel(e, username, password)}>
                    <div className="container">
                        <div class="mb-3">
                            <label for="username" class="form-label">username</label>
                            <input onChange={(e) => setusername(e.target.value)} value={username} type="text" class="form-control" id="username" aria-describedby="username" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" class="form-control" id="password" />
                        </div>
                        <button type="submit" style={buttonStyle}>login</button>
                    </div>
                </form>
            </section>
        </>
    );
}

const buttonStyle = {
    display: "block",
    width: "fit-content",
    textTransform: "capitalize",
    textDecoration: "none",
    backgroundColor: "var(--main-color)",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
    padding: "8px 15px",
    borderRadius: "7px",
    margin: "35px auto 0",
    outline: "none",
    border: "none"
}

export default Login;