import React from 'react'
import {Link, useHistory } from "react-router-dom";
import "./styles.css";

export default function AboutGamer() {
    const history = useHistory();
    return(
        <div>
            <text>About Gamer</text>
            <div className="return">
            <Link to="/incidents/new"  ><img src="https://img.icons8.com/android/24/000000/back.png"/>VOLTAR</Link>
          </div>
        </div>
    )
}


  
