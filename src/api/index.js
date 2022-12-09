import axios from "axios";
const { REACT_APP_POKEMON_API } = process.env;

export const getAllPokemons = async (offset, limit) => {
  const { data } = await axios.get(`${REACT_APP_POKEMON_API}/pokemon`, {
    params: {
      limit,
      offset,
    },
  });
  return data;
};

export const findByName = async (name) => {
  const { data } = await axios.get(`${REACT_APP_POKEMON_API}/pokemon/${name}`);
  return data;
};
