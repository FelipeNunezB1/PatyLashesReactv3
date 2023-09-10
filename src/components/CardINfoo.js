import React from 'react';
import styles from './MovieGrid.module.css';
import CardINfooCard from "./CardINfooCard";

const Reserv = ({ cardinfo, handleDelete }) => {
  const handleDeleteCard = (id) => {
    handleDelete(id);
  };

  return (
    <ul className={styles.movieGrid}>
      {cardinfo.map((card) => (
        <CardINfooCard key={card.id} cardinfo={card} handleDelete={handleDeleteCard} />
      ))}
    </ul>
  );
}

export default Reserv;
