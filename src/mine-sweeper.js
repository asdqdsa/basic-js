const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  const list = matrix.map((x) => [...x]);

  // row & col matrix coordinates
  for (let i = 0; i < height; i += 1) {
    for (let j = 0; j < width; j += 1) {
      let count = 0;
      // inner default box of 3x3
      for (let box_i = -1; box_i <= 1; box_i += 1) {
        for (let box_j = -1; box_j <= 1; box_j += 1) {
          // neighbor row & col coordinates
          let ni = i + box_i;
          let nj = j + box_j;

          // check out of bounds coordinates
          if (0 <= ni && ni < height && 0 <= nj && nj < width) {
            if (matrix[ni][nj]) count += 1;
          }
        }
      }
      // check if target coordinate is true
      if (matrix[i][j]) count -= 1;
      list[i][j] = count;
    }
  }
  return list;
}

module.exports = {
  minesweeper,
};
