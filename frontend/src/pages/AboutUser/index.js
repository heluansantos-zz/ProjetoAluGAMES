import React from 'react'
import {Link, useHistory } from "react-router-dom";
import "./styles.css";

export default function AboutUser() {
    const history = useHistory();
    return(
        <div>
            <text>About User</text>
            <div className="return">
            <Link to="/register"  ><img src="https://img.icons8.com/android/24/000000/back.png"/>VOLTAR</Link>
          </div>
        </div>
    )
}


  
