import styles from './Modal.module.css';

export function Modal({ personagem, onClose }) {
  if (!personagem) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* botao para fechar o modal */}
        <button onClick={onClose} className={styles.fechar}>Fechar</button>
        {/* informações do personagem */}
        <h2>{personagem.name}</h2>
        <img src={personagem.image} alt={personagem.name} />
        <p>Casa: {personagem.house}</p>
        <p>Patrono: {personagem.patronus || 'Desconhecido'}</p>
      </div>
    </div>
  );
}

