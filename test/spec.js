const { expect } = require("chai");
const generateMatrix = require("../index.js");

describe("matrix-of-ones", function () {
  //   it("Should throw an error if given an input orther than number as rows and columns", () => {
  //     const invalidInput = generateMatrix(3, "A");
  //     const validInput = generateMatrix(9, 2, "A");
  //     expect(invalidInput).to.throw();
  //     expect(validInput).to.not.throw();
  //   });

  it("Should return a correct matrix", () => {
    const matrix1 = generateMatrix(3, 2);
    const matrixA = generateMatrix(2, 3, "A");
    expect(matrix1).to.deep.equal([
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    expect(matrixA).to.deep.equal([
      ["A", "A", "A"],
      ["A", "A", "A"],
    ]);
  });
});
