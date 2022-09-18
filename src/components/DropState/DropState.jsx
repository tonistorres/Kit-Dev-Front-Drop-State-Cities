// https://www.youtube.com/watch?v=Aca6mAXi0j4
// https://www.youtube.com/watch?v=yc0TYlnZIp4
// snippet useEffect - uef/usf
import React, { useEffect, useState } from 'react';
import { getApiIBGE } from '../../services/ibge';
import PropTypes from 'prop-types';

// caso ele não seja passado por default passarei um função vazia
export const DropStates = ({ id, name, onChange = () => {} }) => {
  const [arrStates, setStates] = useState([]);

  useEffect(() => {
    try {
      const fetchDataAxios = async () => {
        const returnState = await getApiIBGE('/localidades/estados');
        setStates(returnState);
      };
      fetchDataAxios();
    } catch (error) {
      console.log(`Erro useEffect Component State ${error}`);
    }
  }, []);

  const orderStates = arrStates => {
    arrStates.sort(function (a, b) {
      if (a.nome < b.nome) {
        return -1;
      } else {
        return true;
      }
    });
  };
  // involking function orderState
  orderStates(arrStates);
  return (
    <select id={id || name} name={name || id} onChange={onChange}>
      <option value="selecione" name="selecione" onChange={onChange}>
        Selecione estado...
      </option>
      {arrStates &&
        arrStates.map(function (data, idx) {
          return (
            <option
              value={data.sigla}
              key={idx + 1}
              // selected={data.nome === 'Maranhão'}
            >
              {data.nome}
            </option>
          );
        })}
    </select>
  );
};

DropStates.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};
