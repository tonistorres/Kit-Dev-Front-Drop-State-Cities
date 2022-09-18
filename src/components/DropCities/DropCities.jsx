// https://www.youtube.com/watch?v=Aca6mAXi0j4
// https://www.youtube.com/watch?v=yc0TYlnZIp4
// snippet useEffect - uef
import React, { useEffect, useState } from 'react';
import { getApiIBGE } from '../../services/ibge';

export const DropCities = () => {
  const [arrCities, setCities] = useState([]);

  useEffect(() => {
    try {
      const fetDataCitiesState = async state => {
        const returnCities = await getApiIBGE(
          `/localidades/estados/${state}/municipios`
        );
        setCities(returnCities);
      };

      fetDataCitiesState('MA');
    } catch (error) {
      console.log(`Erro useEffect Component State ${error}`);
    }
  }, []);

  // const orderStates = arrStates => {
  //   arrStates.sort(function (a, b) {
  //     if (a.nome < b.nome) {
  //       return -1;
  //     } else {
  //       return true;
  //     }
  //   });
  // };
  // orderStates(arrCities);

  return (
    <select name="" id="cidade_id" className="sl-drop-cities">
      {arrCities &&
        arrCities.map(function (data, idx) {
          return (
            <option
              value={data.sigla}
              key={idx + 1}
              selected={data.nome === 'Maranhão'}
            >
              {data.nome}
            </option>
          );
        })}
    </select>
  );
};
