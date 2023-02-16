// todos los hooks tienen que comenzar por la palabra use
//  para hacer uso de un contexto
import { useContext } from 'react';
// ahora vamos a importar nuestro contexto
import UserContext from '../context/UserContext';

// vamos a utilizar el hook useContext, para sacar el contenido del contexto de UserContext y retornarlo a quién llame a este hook
export default () => useContext(UserContext);
// exportamos una función tipo flecha, que cuando la función de ejecute,
// lo que va hacer es ejecutar el useContext (hook) para sacar el contenido de UserContext
