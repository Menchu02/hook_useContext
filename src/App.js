// importamos el contexto
import UserContext from './context/UserContext';
import './App.css';
import Hijo from './components/Hijo';

function App() {
  const userData = {
    name: 'Patricia',
    lastName: 'García',
    years: 38,
    city: 'Zaragoza',
  };
  return (
    // le paso los datos al contexto en su prop de valor
    <UserContext.Provider value={userData}>
      <div className='App'>
        <Hijo />
      </div>
    </UserContext.Provider>
  );
}

export default App;
