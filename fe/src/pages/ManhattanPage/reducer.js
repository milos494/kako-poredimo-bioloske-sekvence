export const manhattanInitialState = {};

export const manhattanReducer = (state, action) => {
  const { type, i, j, value, full } = action;
  switch (type) {
    case 'down':
      return {
        ...state,
        [`${i};${j}`]: {
          ...state[`${i};${j}`],
          [`${i + 1};${j}`]: value,
        },
      };
    case 'right':
      return {
        ...state,
        [`${i};${j}`]: {
          ...state[`${i};${j}`],
          [`${i};${j + 1}`]: value,
        },
      };
    case 'full':
      return { ...full };
    default:
      return {};
  }
};
