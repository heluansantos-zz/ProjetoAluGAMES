import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import logoUm from "../../assets/logo-um.png"
import logoCenter from "../../assets/logo-center.png"
import api from "../../services/api";

import "./styles.css";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      console.log(err);
      alert("Falha no login, tente novamente.");
    }
  }
  return (
    <div className="App">
      <div className="flex">
        <img src={logoUm} alt="Imagem de logo" height="55" />
      </div>
      <div className="logon-container">
        <section className="form">
          <div className="logo-center">
            <img  src={logoCenter} alt="logo" height="25"/>
          </div>
          <form onSubmit={handleLogin}>

            <input
              placeholder="Digite seu ID"
              value={id}
              onChange={e => setId(e.target.value)} className="enter-text"
            />
            <button className="ButtonLogin" type="submit">
              <strong>ENTRAR </strong>
            </button>
          </form>
          <div className="voltar" >
            <Link to="/register">
                <a>Não tenho cadastro</a>
            </Link>
          </div>
          
        </section>
      </div>
    </div>
  );
}
