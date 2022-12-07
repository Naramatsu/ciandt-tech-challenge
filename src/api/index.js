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

export const getAllTypes = async () => {
  const {
    data: { results },
  } = await axios.get(`${REACT_APP_POKEMON_API}/type`);
  return results;
};
