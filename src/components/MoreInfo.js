import React from 'react';
import styles from './moreInfo.module.css';

import UserContext from '../context/UserContext';
import { useContext } from 'react';

export default function MoreInfo() {
  const { name, lastName, years, city } = useContext(UserContext);
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.heading}>Usuario</h1>

      <p className={styles.text}>Nombre: {name} </p>
      <p className={styles.text}>Apellido: {lastName} </p>
      <p className={styles.text}>Año: {years} </p>
      <p className={styles.text}>Ciudad: {city} </p>
    </div>
  );
}
