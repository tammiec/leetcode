/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows < 3) {
    if (numRows === 1) {
      return [
        [1]
      ];
    } else if (numRows === 2) {
      return [
        [1],
        [1, 1]
      ];
    } else {
      return [];
    }
  } else {

    let rows = [[1], [1, 1]];
    let prevRow = [1, 1];

    for (let i = 3; i <= numRows; i++) {
  
      let currRow = [];

      for (let j = 0; j <= prevRow.length; j++) {
        if (j === 0 || j === prevRow.length) {
          currRow.push(1);
        } else {
          currRow.push(prevRow[j] + prevRow[j - 1]);
        }
      }

      rows.push(currRow);
      prevRow = currRow;
  
    }

    return rows;
  }

};