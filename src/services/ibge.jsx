// https://servicodados.ibge.gov.br/api/v1/localidades/estados
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios

import axios from 'axios';

const BASE_URL = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
});

export const getApiIBGE = async endpoint => {
  const data = await BASE_URL.get(endpoint).then(response => response.data);
  return data;
};
