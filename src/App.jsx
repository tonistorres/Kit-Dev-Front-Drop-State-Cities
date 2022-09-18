import React, { useState } from 'react';
import { DropStates } from './components/DropState/DropState';
import { DropCities } from './components/DropCities/DropCities';
import './App.css';

// snippet useEffect - uef/usf/sfc

export const App = () => {
  const [formValue, setFormValue] = useState({});

  const handleInputChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log('handelInputChange Value-->>', value);
    if (value !== 'selecione') {
      setFormValue({ formValue, [name]: value });
      console.log('Value no formValue State-->>', formValue);
    } else {
      const { value, name } = e.target;
      setFormValue({ formValue, [name]: value });
    }
  };
  return (
    <div className="container">
      <form action="">
        <label htmlFor="uf_id">UF:</label>
        <DropStates onChange={handleInputChange} id="state" name="state" />
        <label htmlFor="cidade_id">Cidade:</label>
        <DropCities
          state={formValue.state}
          onChange={handleInputChange}
          id="city"
          name="city"
        />
      </form>
    </div>
  );
};
