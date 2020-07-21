import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo-um.png";
import jogoImg from "../../assets/xadrez.jpg";
import socialIco from "../../assets/whatsapp.png"
import { Link, useHistory } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
import "./styles.css";
//43b30896
//ed07d990

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const [xincidents, setXincidents] = useState([]);
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", {
        headers: { Authorization: ongId }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);


  useEffect(() => {
    api.get("incidents", {
      headers: { Authorization: ongId }
    })
      .then(response => {
        setXincidents(response.data);
      });
  }, []);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar o caso");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="AluGAMES" />
        <p>Bem vindo(a) ,
           <font size={5}>
            {ongName}!
          </font>
        </p>
        <Link to="/incidents/new" className="register">
          Cadastrar novo jogo
        </Link>


      </header>
      <div className="scroll-horizontal">
        <p className="title-jogos">SEUS JOGOS</p>
        <ul>
          {incidents.map(incident => (
            <li key={incident.id}>
              <div className="img-jogo">
                <img src={jogoImg} alt="AluGAMES" />
              </div>
              <div className="info-esq">
                <p>{incident.title}</p>
                <p>{ongName}</p>
                <p>{incident.description}</p>
              </div>
              <button className="trash" type="button" onClick={() => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
        <p className="title-jogos"> JOGOS DISPONÍNEIS PARA EMPRÉSTIMO </p>
        <ul>
          {xincidents.map(incidentx => (
            <li key={incidentx.id}>
              <div className="img-jogo">
                <img src={jogoImg} alt="AluGAMES" />
              </div>
              <div className="info-esq">
                <strong></strong>
                <p>{incidentx.title}</p>
                <p>{incidentx.description}</p>
              </div>
              
              <div className="info-dir">
                <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(xincidents.whatsapp)}&text=${encodeURIComponent(`Estou interessado em pegar emprestado com você o jogo de ${incidentx.title}, pode ser ? `)}`} target="_blank">
                  <button > <img src={socialIco} /> quero esse</button>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={handleLogout} className="exit-page">
        <img src="https://img.icons8.com/android/24/000000/logout-rounded-left.png" /> <p>SAIR</p>
      </button>
    </div>
  );
}
