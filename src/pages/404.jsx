import React from 'react';

const NotFound = () => {
    return ( 
        <section style={style}>
            <h1>Page Not Found</h1>
        </section>
    );
}

const style = {
    backgroundColor: "var(--background-color)",
    height: "calc(100vh - 148px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

export default NotFound;