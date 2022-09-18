import { DropStates } from './components/DropState/DropState';
import { DropCities } from './components/DropCities/DropCities';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <form action="">
        <label htmlFor="uf_id">UF:</label>
        <DropStates />
        <label htmlFor="cidade_id">Cidade:</label>
        <DropCities />
      </form>
    </div>
  );
};
