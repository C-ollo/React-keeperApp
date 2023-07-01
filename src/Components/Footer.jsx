import React from "react";

const year = new Date().getFullYear();

function Footer(){
    return <div><p>copyright {year}</p></div>
}

export default Footer;