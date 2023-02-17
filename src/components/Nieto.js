import React from 'react';
import styles from './moreInfo.module.css';

import UserContext from '../context/UserContext';
import { useContext } from 'react';
import useUser from '../hooks/useUser';

export default function Nieto() {
  const { name, lastName, years, city } = useContext(UserContext);
  const example = useUser()
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.heading}>Usuario</h1>

      <p className={styles.text}>Nombre: {example.name} </p>
      <p className={styles.text}>Apellido: {example.lastName} </p>
      <p className={styles.text}>Año: {example.years} </p>
      <p className={styles.text}>Ciudad: {example.city} </p>
    </div>
  );
}
