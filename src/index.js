module.exports = function towelSort(matrix) {
  try {
    let towel = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        towel = towel.concat(matrix[i]);
      } else {
        towel = towel.concat(matrix[i].reverse());
      }
    }
    return towel;
  }  catch (err) {
    return []
  }
}

