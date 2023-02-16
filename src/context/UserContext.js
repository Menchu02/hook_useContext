// ESTADO GLOBAL DE UN USUARIO
// 1 paSO, crear función createContext
import { createContext } from 'react';
const UserContext = createContext({
  // inicializamos el contexto con varios datos
  name: null,
  lastName: null,
  years: null,
  city: null,
});

// importamos este contexto para utilizarlo en otro componente
export default UserContext;
