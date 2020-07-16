import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

<<<<<<< HEAD
import heroesImg from "../../assets/Grupo 33.png";
=======
import heroesImg from "../../assets/heroes.png";
import logoUm from "../../assets/logo-um.png"
import logoCenter from "../../assets/logo-center.png"
>>>>>>> e291b02fec8401955084b7baee1400d1c0c70dbf
import logoImg from "../../assets/logo.svg";
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
<<<<<<< HEAD
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1> Faça seu logon </h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar aqui
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" className="fundo"/>
=======
    <div className="App">
      <div className="flex">
        <img src={logoUm} alt="Imagem de logo" height="55" />
        <button className="botao-ajuda">AJUDA</button>
      </div>
      <div className="logon-container">
        <section className="form">
        <img className="logo-center" src={logoCenter} alt="logo" height="25" />

          <form onSubmit={handleLogin}>

            <input
              placeholder="Sua ID"
              value={id}
              onChange={e => setId(e.target.value)} className="enter-text"
            />
            <button className="ButtonLogin" type="submit">
              Entrar
            </button>
            <Link to="/register" className="back-link">
              <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>
      </div>
>>>>>>> e291b02fec8401955084b7baee1400d1c0c70dbf
    </div>
  );
}
