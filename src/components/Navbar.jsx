import React from "react";

const styles = {
    navbar: {
        marginTop: '-10px',
        paddingLeft: '18px',
        height: '3%',
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
    }
}

export default function Navbar(props) {
    return <>
    <div style={styles.navbar}>
       <a href="/">
        <p className="logo">Giftstar</p>
        </a> 
        <div id="hamburger-menu">

        {/* <ul>
            <li>me</li>
            <li>log</li>
        </ul> */}
        </div>
    </div>
    
    </>
}