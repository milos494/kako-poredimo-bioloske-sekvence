import { Injectable } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';

@Injectable()
export class LocalAlignmentService {
  localAlignment = ({
    sequence1,
    sequence2,
    indel = 0,
    mismatch = 0,
  }: LCSInputDto) => {
    const width = sequence1.length;
    const height = sequence2.length;
    const backtrack = { '0;0': '-1;-1' };
    const S = { '0;0': 0 };
    let maxScore = 0;
    let maxPosition = { i: 0, j: 0 };
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
        const fromTop = S[`${i - 1};${j}`] - indel;
        const fromLeft = S[`${i};${j - 1}`] - indel;
        const fromDiagonal =
          S[`${i - 1};${j - 1}`] +
          +(sequence1[j - 1] === sequence2[i - 1] ? 1 : -mismatch);

        S[`${i};${j}`] = Math.max(fromTop, fromLeft, fromDiagonal, 0);

        if (S[`${i};${j}`] >= maxScore) {
          maxScore = S[`${i};${j}`];
          maxPosition = { i, j };
        }

        if (S[`${i};${j}`] === fromTop) {
          backtrack[`${i};${j}`] = `${i - 1};${j}`;
        } else if (S[`${i};${j}`] === fromLeft) {
          backtrack[`${i};${j}`] = `${i};${j - 1}`;
        } else {
          backtrack[`${i};${j}`] = `${i - 1};${j - 1}`;
        }
      }
    }

    // novi bakctrack

    for (let i = maxPosition.i + 1; i < height + 1; i += 1) {
      backtrack[`${i};${maxPosition.j}`] = `${i - 1};${maxPosition.j}`;
      S[`${i};${maxPosition.j}`] = maxScore - (i - maxPosition.i) * indel;
    }
    for (let j = maxPosition.j + 1; j < width + 1; j += 1) {
      backtrack[`${maxPosition.i};${j}`] = `${maxPosition.i};${j - 1}`;
      S[`${maxPosition.i};${j}`] = maxScore - (j - maxPosition.j) * indel;
    }
    for (let i = maxPosition.i + 1; i < height + 1; i += 1) {
      for (let j = maxPosition.j + 1; j < width + 1; j += 1) {
        const fromTop = S[`${i - 1};${j}`] - indel;
        const fromLeft = S[`${i};${j - 1}`] - indel;
        const fromDiagonal =
          S[`${i - 1};${j - 1}`] +
          +(sequence1[j - 1] === sequence2[i - 1] ? 1 : -mismatch);

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

    S[`${height};${width}`] = maxScore;

    const track = Object.keys(backtrack).reduce((previous, current) => {
      const previousCopy = { ...previous };
      previousCopy[backtrack[current]] = previous[backtrack[current]]
        ? [...previous[backtrack[current]], current]
        : [current];
      return previousCopy;
    }, {});

    let lcs = '';
    let sequence1Modified = '';
    let sequence2Modified = '';
    let sequence1Position = [];
    let sequence2Position = [];
    // let { i, j } = maxPosition;
    let i = height;
    let j = width;
    const trackLongestSequence = {};

    const increaseIndexes = (array) => {
      return array.map((item) => item + 1);
    };

    while (i !== 0 || j !== 0) {
      if (backtrack[`${i};${j}`] === `${i - 1};${j - 1}`) {
        sequence1Modified = sequence1[j - 1] + sequence1Modified;
        sequence2Modified = sequence2[i - 1] + sequence2Modified;

        if (sequence1[j - 1] === sequence2[i - 1]) {
          trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
          sequence1Position.push(j - 1);
          sequence2Position.push(i - 1);
        } else {
          trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}?finalPath`;
        }
      } else if (backtrack[`${i};${j}`] === `${i};${j - 1}`) {
        trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
        sequence1Modified = sequence1[j - 1] + sequence1Modified;
        sequence2Modified = '-' + sequence2Modified;
        sequence2Position = increaseIndexes(sequence2Position);
      } else {
        trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
        sequence1Modified = '-' + sequence1Modified;
        sequence2Modified = sequence2[i - 1] + sequence2Modified;
        sequence1Position = increaseIndexes(sequence1Position);
      }

      const oldI = i;
      i = +backtrack[`${i};${j}`].split(';')[0];
      j = +backtrack[`${oldI};${j}`].split(';')[1];
    }

    i = maxPosition.i;
    j = maxPosition.j;

    while ((i !== 0 || j !== 0) && S[`${i};${j}`] !== 0) {
      if (backtrack[`${i};${j}`] === `${i - 1};${j - 1}`) {
        if (sequence1[j - 1] === sequence2[i - 1]) {
          lcs = sequence1[j - 1] + lcs;
        }
      }
      const oldI = i;
      i = +backtrack[`${i};${j}`].split(';')[0];
      j = +backtrack[`${oldI};${j}`].split(';')[1];
    }

    return {
      track,
      S,
      trackLongestSequence,
      lcs,
      backtrack,
      sequence1Modified,
      sequence2Modified,
      sequence1Position,
      sequence2Position,
    };
  };
}
