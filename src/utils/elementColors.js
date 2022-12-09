const bgBuilder = (color) => {
  return {
    background: `linear-gradient(90deg, ${color} 20%, #ffffff 67%, ${color} 100%)`,
  };
};

export const cardColor = (type) => {
  switch (type) {
    case "water":
      return {
        ...color_water.bg(),
        "--color": color_water.color,
      };
    case "fire":
      return {
        ...color_fire.bg(),
        "--color": color_fire.color,
      };
    case "grass":
      return {
        ...color_grass.bg(),
        "--color": color_grass.color,
      };
    case "electric":
      return {
        ...color_electric.bg(),
        "--color": color_electric.color,
      };
    case "poison":
      return {
        ...color_poison.bg(),
        "--color": color_poison.color,
      };
    case "fighting":
      return {
        ...color_fighting.bg(),
        "--color": color_fighting.color,
      };
    case "dark":
      return {
        ...color_dark.bg(),
        "--color": color_dark.color,
      };
    case "ground":
      return {
        ...color_ground.bg(),
        "--color": color_ground.color,
      };
    case "ghost":
      return {
        ...color_ghost.bg(),
        "--color": color_ghost.color,
      };
    case "ice":
      return {
        ...color_ice.bg(),
        "--color": color_ice.color,
      };
    case "psychic":
      return {
        ...color_psychic.bg(),
        "--color": color_psychic.color,
      };
    case "rock":
      return {
        ...color_rock.bg(),
        "--color": color_rock.color,
      };
    case "bug":
      return {
        ...color_bug.bg(),
        "--color": color_bug.color,
      };
    default:
      return {
        ...color_flying.bg(),
        "--color": color_flying.color,
      };
  }
};

const color_flying = {
  color: "#e5e3df",
  bg: () => bgBuilder(color_flying.color),
};

const color_psychic = {
  color: "#c430f9",
  bg: () => bgBuilder(color_psychic.color),
};

const color_bug = {
  color: "#c9c279",
  bg: () => bgBuilder(color_bug.color),
};

const color_rock = {
  color: "#bca884",
  bg: () => bgBuilder(color_rock.color),
};

const color_fire = {
  color: "#e50020",
  bg: () => bgBuilder(color_fire.color),
};

const color_grass = {
  color: "#68ae28",
  bg: () => bgBuilder(color_grass.color),
};

const color_water = {
  color: "#88a3d4",
  bg: () => bgBuilder(color_water.color),
};

const color_electric = {
  color: "#ffe100",
  bg: () => bgBuilder(color_electric.color),
};

const color_poison = {
  color: "#8f75a3",
  bg: () => bgBuilder(color_poison.color),
};

const color_fighting = {
  color: "#d84117",
  bg: () => bgBuilder(color_fighting.color),
};

const color_dark = {
  color: "#1c3357",
  bg: () => bgBuilder(color_dark.color),
};

const color_ground = {
  color: "#96612e",
  bg: () => bgBuilder(color_ground.color),
};

const color_ghost = {
  color: "#885f80",
  bg: () => bgBuilder(color_ghost.color),
};

const color_ice = {
  color: "#87efff",
  bg: () => bgBuilder(color_ice.color),
};
