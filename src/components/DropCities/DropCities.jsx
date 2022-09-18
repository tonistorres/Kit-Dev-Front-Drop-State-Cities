// https://www.youtube.com/watch?v=Aca6mAXi0j4
// https://www.youtube.com/watch?v=yc0TYlnZIp4
// snippet useEffect - uef
import React, { useEffect, useState } from 'react';
import { getApiIBGE } from '../../services/ibge';
import PropTypes from 'prop-types';

export const DropCities = ({ id, name, state, onChange = () => {} }) => {
  const [arrCities, setCities] = useState([]);

  useEffect(() => {
    try {
      const fetDataCitiesState = async state => {
        const returnCities = await getApiIBGE(
          `/localidades/estados/${state}/municipios`
        );

        setCities(returnCities);
      };
      console.log('Como estado cheaga useEffect UPDARW', state);
      if (state !== 'selecione...') fetDataCitiesState(state);
      /**Logica: neste caso o estado sempre será diferente de selecione...
       * quando a opção vier com value "selecione" o mesmo seta em branco e o
       * estado retorna em branco fazendo com que o comboBox de city fique em
       * branco que é o comportamento que queremos nesse contexto
       */
    } catch (error) {
      console.log(`Erro useEffect Component State ${error}`);
    }
  }, [state]);

  return (
    <select id={id || name} name={name || id} onChange={onChange}>
      {arrCities &&
        arrCities.map(function (data) {
          return (
            <option value={data.id} key={data.id}>
              {data.nome}
            </option>
          );
        })}
    </select>
  );
};

DropCities.propTypes = {
  state: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
};
