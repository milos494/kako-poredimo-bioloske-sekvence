import { Injectable } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';

@Injectable()
export class AffineGapPenaltyAlignmentService {
  affineGapPenaltyAlignment = ({
    sequence1,
    sequence2,
    eps = 0,
    sigma = 0,
    mismatch = 0,
  }: LCSInputDto) => {
    const width = sequence1.length;
    const height = sequence2.length;
    const backtrack = { '0;0': '-1;-1' };
    const upper = { '0;0': 0 };
    const middle = { '0;0': 0 };
    const lower = { '0;0': 0 };

    for (let i = 1; i < width + 1; i += 1) {
      backtrack[`0;${i}`] = `0;${i - 1}`;
      upper[`0;${i}`] = 0;
      middle[`0;${i}`] = 0;
      lower[`0;${i}`] = 0;
    }

    for (let j = 1; j < height + 1; j += 1) {
      backtrack[`${j};0`] = `${j - 1};0`;
      upper[`${j};0`] = 0;
      middle[`${j};0`] = 0;
      lower[`${j};0`] = 0;
    }

    for (let i = 1; i < height + 1; i += 1) {
      for (let j = 1; j < width + 1; j += 1) {
        const match = +(sequence1[j - 1] === sequence2[i - 1] ? 2 : -mismatch);

        lower[`${i};${j}`] =
          Math.round(
            Math.max(
              lower[`${i - 1};${j}`] - eps,
              middle[`${i - 1};${j}`] - sigma,
            ) * 100,
          ) / 100;

        upper[`${i};${j}`] =
          Math.round(
            Math.max(
              upper[`${i};${j - 1}`] - eps,
              middle[`${i};${j - 1}`] - sigma,
            ) * 100,
          ) / 100;

        middle[`${i};${j}`] =
          Math.round(
            Math.max(
              middle[`${i - 1};${j - 1}`] + match,
              lower[`${i};${j}`],
              upper[`${i};${j}`],
            ) * 100,
          ) / 100;

        if (middle[`${i};${j}`] === middle[`${i - 1};${j - 1}`] + match) {
          backtrack[`${i};${j}`] = `${i - 1};${j - 1}`;
        } else if (middle[`${i};${j}`] == lower[`${i};${j}`]) {
          backtrack[`${i};${j}`] = `${i - 1};${j}`;
        } else {
          backtrack[`${i};${j}`] = `${i};${j - 1}`;
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

    let i = height;
    let j = width;

    let lcs = '';
    let sequence1Modified = '';
    let sequence2Modified = '';
    let sequence1Position = [];
    let sequence2Position = [];
    const trackLongestSequence = {};

    const increaseIndexes = (array) => {
      return array.map((item) => item + 1);
    };
    while (i !== 0 || j !== 0) {
      if (backtrack[`${i};${j}`] === `${i - 1};${j - 1}`) {
        sequence1Modified = sequence1[j - 1] + sequence1Modified;
        sequence2Modified = sequence2[i - 1] + sequence2Modified;

        if (sequence1[j - 1] === sequence2[i - 1]) {
          lcs = sequence1[j - 1] + lcs;
          sequence1Position.push(j - 1);
          sequence2Position.push(i - 1);

          trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
        } else {
          trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}?finalPath`;
        }
      } else {
        trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
        if (backtrack[`${i};${j}`] === `${i};${j - 1}`) {
          sequence1Modified = sequence1[j - 1] + sequence1Modified;
          sequence2Modified = '-' + sequence2Modified;
          sequence2Position = increaseIndexes(sequence2Position);
        }

        if (backtrack[`${i};${j}`] === `${i - 1};${j}`) {
          sequence1Modified = '-' + sequence1Modified;
          sequence2Modified = sequence2[i - 1] + sequence2Modified;
          sequence1Position = increaseIndexes(sequence1Position);
        }
      }

      const oldI = i;
      i = +backtrack[`${i};${j}`].split(';')[0];
      j = +backtrack[`${oldI};${j}`].split(';')[1];
    }

    return {
      track,
      S: middle,
      trackLongestSequence,
      lcs,
      backtrack,
      sequence1Modified,
      sequence2Modified,
      sequence1Position,
      sequence2Position,
      lower,
      upper,
    };
  };
}
