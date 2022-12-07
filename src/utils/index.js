export const saveItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemInLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeDuplicateItems = (items) => {
  const hash = {};
  return items.filter((current) => {
    const exists = !hash[current.name];
    hash[current.name] = true;
    return exists;
  });
};
