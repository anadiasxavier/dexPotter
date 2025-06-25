// imports
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from './Card';
import { Modal } from './Modal';
import estilos from './Lista.module.css';

export function Lista() {
  // armazena os personagens, filtros e o personagem selecionado
  const [personagens, setPersonagens] = useState([]);
  const [filtroNome, setFiltroNome] = useState('');
  const [filtroCasa, setFiltroCasa] = useState('');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  // busca o personagem da api
  useEffect(() => {
    axios.get('https://hp-api.onrender.com/api/characters')
      .then((res) => {
        setPersonagens(res.data);
      })
      .catch((erro) => {
        console.error('Erro ao buscar personagens:', erro);
      });
  }, []);

  // filtra os personagens pelo nome e casa
  const personagensFiltrados = personagens.filter((personagem) => {
    const nomeMatch = personagem.name.toLowerCase().includes(filtroNome.toLowerCase());
    const casa = personagem.house || ''; 
    const casaMatch = casa.toLowerCase().includes(filtroCasa.toLowerCase());
    return nomeMatch && casaMatch;
  });

  return (
    <>
    {/* filtros por nome e casa */}
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
      
      {/* lista de personagens */}
      <div className={estilos.conteiner}>
        <figure>
          {personagensFiltrados
            .filter(p => p.image && p.image.trim() !== '') 
            .map((personagem) => (
              <Card
                key={personagem.name}
                personagem={personagem}
                onOpenModal={() => setPersonagemSelecionado(personagem)}
              />
            ))}
        </figure>
        
        {/* modal do personagem */}
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
