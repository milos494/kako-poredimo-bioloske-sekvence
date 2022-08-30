import { Injectable } from '@nestjs/common';
import { LCSInputDto } from 'src/dto/lcs-input.dto';

@Injectable()
export class GlobalAlignmentService {
  globalAlignment = ({
    sequence1,
    sequence2,
    indel = 0,
    mismatch = 0,
  }: LCSInputDto) => {
    const width = sequence1.length;
    const height = sequence2.length;
    const backtrack = { '0;0': '-1;-1' };
    const S = { '0;0': 0 };
    for (let i = 1; i < width + 1; i += 1) {
      backtrack[`0;${i}`] = `0;${i - 1}`;
      S[`0;${i}`] = -i * indel;
    }
    for (let j = 1; j < height + 1; j += 1) {
      backtrack[`${j};0`] = `${j - 1};0`;
      S[`${j};0`] = -j * indel;
    }

    for (let i = 1; i < height + 1; i += 1) {
      for (let j = 1; j < width + 1; j += 1) {
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
