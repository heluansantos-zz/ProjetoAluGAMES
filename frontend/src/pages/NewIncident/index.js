import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo-um.png";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };
    if(title && description){
      try {
        await api.post("/incidents", data, {
          headers: { Authorization: ongId }
        });
  
        history.push("/profile");
      } catch (err) {
        console.log(err);
        alert("Erro no cadastro, tente novamente");
      }
    }else{
      alert("Preencha todos os campus!");
    }
    
  }
  return (
    <div className="new-incident-container">
      <header>
        <div >
          <img src={logoImg} alt="AluGAMES" />
            <div className="user">
              <p>Seja Bem vindo(a),<h2>{ongName}</h2> </p>
            </div>
            </div>
        <div>
          <Link to="/" className="back">sair
          </Link>
        </div>
      </header>
      <div className="content">
        <section>
          <div className="symbol">
          <img src="https://img.icons8.com/android/24/000000/box-important.png"/>
          </div>
          <div className="term">
            <p>
              Antes de cadastrar um jogo, é necessário
              que tenha lido o <a href="google.com">Termo de compromisso. </a>
              Sendo assim, você está ciente que é
              totalmente responsável pelo cadastro e 
              por quaisquer ocasiões futuras.
            </p>
          </div>
          <div >
            <Link to="/" className="term-link">
              <div className="left">Termo de compromisso.</div>
              <div className="right">
                <img src="https://img.icons8.com/android/24/000000/left.png"/>
              </div>
            </Link>
          </div>
          <div className="return">
            <Link to="/profile"  ><img src="https://img.icons8.com/android/24/000000/back.png"/>VOLTAR</Link>
          </div>
        </section>

        <form onSubmit={handleNewIncident}>
          <div className="info-game">
            <div>
            <img src="https://img.icons8.com/android/24/000000/dice.png"/>
            </div>
            <div className="name-game">
              <p>Qual o nome do jogo?</p>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            
          </div>
          <div className="description">
            <p> Adicione um comentário</p>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="end-register">
            <button type="submit">
              <p>CONCLUÍDO</p>
              <img src="https://img.icons8.com/android/24/000000/play.png"/>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}