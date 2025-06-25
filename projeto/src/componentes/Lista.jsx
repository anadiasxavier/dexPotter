import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from './Card';
import { Modal } from './Modal';
import estilos from './Lista.module.css';

export function Lista() {
  const [personagens, setPersonagens] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroCasa, setFiltroCasa] = useState('');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters')
      .then((res) => {
        setPersonagens(res.data);
      })
      .catch((erro) => {
        console.error('Erro ao buscar personagens:', erro);
      });
  }, []);

  const personagensFiltrados = personagens.filter((personagem) => {
    const nomeMatch = personagem.name.toLowerCase().includes(filtroNome.toLowerCase());
    const casaMatch = personagem.house.toLowerCase().includes(filtroCasa.toLowerCase());
    return nomeMatch && casaMatch;
  });

  return (
    <>
      {/* <Conteudo /> <-- Removido! */}

      <div className={estilos.filtros}>
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={filtroNome}
          onChange={(e) => setFiltroNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por casa"
          value={filtroCasa}
          onChange={(e) => setFiltroCasa(e.target.value)}
        />
        <button onClick={() => {
          setFiltroNome('');
          setFiltroCasa('');
        }}>
          Resetar Filtros
        </button>
      </div>

      <div className={estilos.conteiner}>
        <figure>
          {personagensFiltrados.map((personagem) => (
            <Card
              key={personagem.name}
              personagem={personagem}
              onOpenModal={() => setPersonagemSelecionado(personagem)}
            />
          ))}
        </figure>

        {personagemSelecionado && (
          <Modal
            personagem={personagemSelecionado}
            onClose={() => setPersonagemSelecionado(null)}
          />
        )}
      </div>
    </>
  );
}
