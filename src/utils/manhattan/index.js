const manhattan = (manhattanMap, width, height) => {
  const backtrack = { '0;0': '-1;-1' };
  const S = { '0;0': 0 };
  for (let i = 1; i < width; i += 1) {
    S[`0;${i}`] = S[`0;${i - 1}`] + manhattanMap[`0;${i - 1}`][`0;${i}`];
    backtrack[`0;${i}`] = `0;${i - 1}`;
  }

  for (let j = 1; j < height; j += 1) {
    S[`${j};0`] = S[`${j - 1};0`] + manhattanMap[`${j - 1};0`][`${j};0`];
    backtrack[`${j};0`] = `${j - 1};0`;
  }

  for (let i = 1; i < height; i += 1) {
    for (let j = 1; j < width; j += 1) {
      const toDown = S[`${i - 1};${j}`] + manhattanMap[`${i - 1};${j}`][`${i};${j}`];
      const toRight = S[`${i};${j - 1}`] + manhattanMap[`${i};${j - 1}`][`${i};${j}`];

      if (toDown > toRight) {
        S[`${i};${j}`] = toDown;
        backtrack[`${i};${j}`] = `${i - 1};${j}`;
      } else {
        S[`${i};${j}`] = toRight;
        backtrack[`${i};${j}`] = `${i};${j - 1}`;
      }
    }
  }

  const track = Object.keys(backtrack).reduce((previous, current) => {
    previous[backtrack[current]] = previous[backtrack[current]]
      ? [...previous[backtrack[current]], current]
      : [current];
    return previous;
  }, {});

  console.log(track);

  return { track, S };
};

export default manhattan;
