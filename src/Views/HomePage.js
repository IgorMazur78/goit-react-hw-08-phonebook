import React from "react";
import style from "../Style/homePage.module.css"


const homePage = () => {
    return(
        <ul className = {style.homePage}>
            <li><h2>Use our service to store your phone contacts</h2></li>
            <li><span>To Register click: Registers</span></li>
            <li><span>To Log in click: Log in</span></li>

        </ul>
        
        
        
    )
}
export default homePage;