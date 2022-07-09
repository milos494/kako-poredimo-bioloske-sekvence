import { useCallback, useEffect, useState } from 'react';

const useIterative = ({ output, speed, showIterative, width, height, paused }) => {
  const [iterativeOutput, setIterativeOutput] = useState(null);
  const [showFinalPath, setShowFinalPath] = useState(false);
  const [finalPath, setFinalPath] = useState(null);

  const showInitialOutput = () => {
    const S = {};
    const track = {};

    for (let j = 0; j < width; j += 1) {
      const current = output.backtrack[`${0};${j}`];
      S[`${0};${j}`] = output.S[`${0};${j}`];
      track[current] = track?.[current] ? `${track[current]}--${0};${j}` : `${0};${j}`;
    }

    for (let i = 0; i < height; i += 1) {
      const current = output.backtrack[`${i};${0}`];
      S[`${i};${0}`] = output.S[`${i};${0}`];
      track[current] = track?.[current] ? `${track[current]}--${i};${0}` : `${i};${0}`;
    }

    setIterativeOutput({ S, track, i: 1, j: 1 });
  };

  const showManhattanOutput = useCallback(() => {
    const { S, track, i, j } = iterativeOutput;
    if (i === height) {
      setShowFinalPath(true);
      return;
    }
    if (j === width) {
      setIterativeOutput({ S, track, i: i + 1, j: 1 });
      return;
    }

    const newS = { ...S, [`${i};${j}`]: output.S[`${i};${j}`] };
    const current = output.backtrack[`${i};${j}`];
    const newTrack = {
      ...track,
      [current]: track?.[current] ? `${track[current]}--${i};${j}` : `${i};${j}`,
    };

    setIterativeOutput({ S: newS, track: newTrack, i, j: j + 1 });
  }, [iterativeOutput]);

  useEffect(() => {
    if (output && !iterativeOutput && showIterative) {
      showInitialOutput();
    }
    if (output && iterativeOutput && !paused && showIterative) {
      setTimeout(() => {
        showManhattanOutput();
      }, speed);
    }
    // if (!showIterative) {
    //   setIterativeOutput({ ...output, finalPath: output.trackLongestSequence });
    // }
  }, [output, iterativeOutput, paused, speed, showIterative]);

  useEffect(() => {
    if (showFinalPath && output) {
      setFinalPath(output.trackLongestSequence);
    }
  }, [showFinalPath, output]);

  return { finalPath, iterativeOutput };
};

export default useIterative;
