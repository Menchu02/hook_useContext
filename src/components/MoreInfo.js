import React from 'react';
import useUse from '../hooks/useUse';

export default function MoreInfo() {
  const { name, lastName, years, city } = useUse();
  return (
    <div>
      <h1>Información del usuario</h1>
      <p>Nombre:{name} </p>
      <p>Apellido:{lastName} </p>
      <p>Año:{years} </p>
      <p>Ciudad:{city} </p>
    </div>
  );
}
