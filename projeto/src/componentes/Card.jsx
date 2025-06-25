import estilo from './Card.module.css';

export function Card({ personagem, onOpenModal }) {
  return (
    <div onClick={() => onOpenModal(personagem)} className={estilo.card}>
      {personagem.image && (
        <img src={personagem.image} alt={personagem.name} />
      )}
      <h3>{personagem.name}</h3>
      <p>{personagem.house}</p>
    </div>
  );
}
