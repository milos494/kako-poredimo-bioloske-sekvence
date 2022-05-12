const LCSBacktrack = (sequence1, sequence2) => {
  const width = sequence1.length;
  const height = sequence2.length;
  const backtrack = { '0;0': '-1;-1' };
  const S = { '0;0': 0 };
  for (let i = 1; i < width + 1; i += 1) {
    backtrack[`0;${i}`] = `0;${i - 1}`;
    S[`0;${i}`] = 0;
  }

  for (let j = 1; j < height + 1; j += 1) {
    backtrack[`${j};0`] = `${j - 1};0`;
    S[`${j};0`] = 0;
  }

  for (let i = 1; i < height + 1; i += 1) {
    for (let j = 1; j < width + 1; j += 1) {
      const fromTop = S[`${i - 1};${j}`] + 0;
      const fromLeft = S[`${i};${j - 1}`] + 0;
      const fromDiagonal = S[`${i - 1};${j - 1}`] + +(sequence1[j - 1] === sequence2[i - 1]);

      S[`${i};${j}`] = Math.max(fromTop, fromLeft, fromDiagonal);

      if (S[`${i};${j}`] === fromTop) {
        backtrack[`${i};${j}`] = `${i - 1};${j}`;
      } else if (S[`${i};${j}`] === fromLeft) {
        backtrack[`${i};${j}`] = `${i};${j - 1}`;
      } else {
        backtrack[`${i};${j}`] = `${i - 1};${j - 1}`;
      }
    }
  }

  const track = Object.keys(backtrack).reduce((previous, current) => {
    const previousCopy = { ...previous };
    previousCopy[backtrack[current]] = previous[backtrack[current]]
      ? [...previous[backtrack[current]], current]
      : [current];
    return previousCopy;
  }, {});
  console.log(backtrack);

  // let i = +backtrack[`${height};${width}`].split(';')[0];
  // let j = +backtrack[`${height};${width}`].split(';')[1];

  let i = height;
  let j = width;
  console.log(i, j, '(((((((');
  let lcs = '';
  const trackLongestSequence = {};

  // if (i === height - 1 && j === width - 1) {
  //   lcs = sequence1[width - 1];
  // }

  while (i !== 0 || j !== 0) {
    // eslint-disable-next-line no-debugger
    // debugger;
    if (i === 6 && j === 16) {
      // eslint-disable-next-line no-debugger
      // debugger;
    }
    if (backtrack[`${i};${j}`] === `${i - 1};${j - 1}`) {
      lcs = sequence1[j - 1] + lcs;
    }
    trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
    const oldI = i;
    i = +backtrack[`${i};${j}`].split(';')[0];
    j = +backtrack[`${oldI};${j}`].split(';')[1];
  }

  return { track, S, trackLongestSequence, lcs, backtrack };
};

export default LCSBacktrack;
