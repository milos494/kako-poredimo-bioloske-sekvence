import { Injectable } from '@nestjs/common';
import { ManhattanInputDto } from 'src/dto/manhattan-input.dto';

@Injectable()
export class ManhattanService {
  manhattan({ width, height, input }: ManhattanInputDto): any {
    // console.log()
    const backtrack = { '0;0': '-1;-1' };
    const S = { '0;0': 0 };

    for (let i = 1; i < width; i += 1) {
      S[`0;${i}`] = S[`0;${i - 1}`] + input[`0;${i - 1}`][`0;${i}`];
      backtrack[`0;${i}`] = `0;${i - 1}`;
    }

    for (let j = 1; j < height; j += 1) {
      S[`${j};0`] = S[`${j - 1};0`] + input[`${j - 1};0`][`${j};0`];
      backtrack[`${j};0`] = `${j - 1};0`;
    }

    for (let i = 1; i < height; i += 1) {
      for (let j = 1; j < width; j += 1) {
        const toDown = S[`${i - 1};${j}`] + input[`${i - 1};${j}`][`${i};${j}`];
        const toRight =
          S[`${i};${j - 1}`] + input[`${i};${j - 1}`][`${i};${j}`];

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
      const previousCopy = { ...previous };
      previousCopy[backtrack[current]] = previous[backtrack[current]]
        ? [...previous[backtrack[current]], current]
        : [current];
      return previousCopy;
    }, {});

    let i = height - 1;
    let j = width - 1;
    const trackLongestSequence = {};

    while (i !== 0 || j !== 0) {
      trackLongestSequence[backtrack[`${i};${j}`]] = `${i};${j}`;
      const oldI = i;
      i = +backtrack[`${i};${j}`].split(';')[0];
      j = +backtrack[`${oldI};${j}`].split(';')[1];
    }

    return {
      track,
      trackLongestSequence,
      S,
      backtrack,
    };
  }
}
