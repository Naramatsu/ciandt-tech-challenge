export const removeDuplicateItems = (items) => {
  const hash = {};
  return items.filter((current) => {
    const exists = !hash[current.name];
    hash[current.name] = true;
    return exists;
  });
};

export const extractPokemonNameFromUrl = (path) => {
  return path.split("/")[2];
};

export const splitStatName = (stat) => stat.split("-").join(" ");
