const makeMatrix = function (rows, columns, value) {
  const element = value || 1;
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let array = [];
    for (let j = 0; j < columns; j++) {
      array.push(element);
    }
    matrix[i] = array;
  }
  return matrix;
};
module.exports = makeMatrix;
