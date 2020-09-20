"use strict";

let moveLeft = { N: "W", W: "S", S: "E", E: "N" };
let moveRight = { N: "E", E: "S", S: "W", W: "N" };

const setStart = (movement, positionIni, sequence, limitArea) => {
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === "G" || sequence[i] === "D") {
      movement = newDirection(movement, sequence[i]);
    } else if (sequence[i] === "A") {
      positionIni = newPosition(positionIni, movement, limitArea);
    } else {
      return null;
    }
  }
  console.log(` ${positionIni}`, `${movement}`);
  return [positionIni, movement];
};

const setLimit = (position, limitArea) => {
  return limitArea[0] < position[0] ||
    limitArea[1] < position[1] ||
    position[0] < 0 ||
    position[1] < 0
    ? true
    : false;
};

const newDirection = (movement, direction) => {
  return direction === "G" ? moveLeft[movement] : moveRight[movement];
};

const newPosition = (position, movement, limitArea) => {
  let newPosition = null;
  if (movement === "N") {
    newPosition = position[1] + 1;
    return setLimit([position[0], newPosition], limitArea)
      ? position
      : [position[0], newPosition];
  } else if (movement === "S") {
    newPosition = position[1] - 1;
    return setLimit([position[0], newPosition], limitArea)
      ? position
      : [position[0], newPosition];
  } else if (movement === "W") {
    newPosition = position[0] - 1;
    return setLimit([newPosition, position[1]], limitArea)
      ? position
      : [newPosition, position[1]];
  } else if (movement === "E") {
    newPosition = position[0] + 1;
    return setLimit([newPosition, position[1]], limitArea)
      ? position
      : [newPosition, position[1]];
  }
};

module.exports = {
  setStart,
  setLimit,
  newPosition,
  newDirection,
};
