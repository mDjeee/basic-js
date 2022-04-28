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
  // throw new NotImplementedError('Not implemented');
  let x = [];

  for(let i=0; i<matrix.length; i++){
    x[i] = [];
    for(let j=0; j<matrix[i].length; j++){
      x[i][j] = null;
    }
  }

  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      let sum = 0;

      if(i-1>=0){
        if(j-1>=0){
          if(matrix[i-1][j-1]){
            sum+=1;
          }
        }
        if(matrix[i-1][j]){
          sum+=1;
        }
        if(j+1<matrix[i].length){
          if(matrix[i-1][j+1]){
            sum+=1;
          }
        }
      }


      if(j-1>=0){
        if(matrix[i][j-1]){
          sum+=1;
        }
      }
      if(j+1<matrix[i].length){
        if(matrix[i][j+1]){
          sum+=1;
        }
      }
      
      if(i+1<matrix.length){
        if(j-1>=0){
          if(matrix[i+1][j-1]){
            sum+=1;
          }
        }
        if(matrix[i+1][j]){
          sum+=1;
        }
        if(j+1<matrix[i].length){
          if(matrix[i+1][j+1]){
            sum+=1;
          }
        }
      }

      x[i][j] = sum;
    }
  }

  return x;
}

module.exports = {
  minesweeper
};
