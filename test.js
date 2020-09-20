// Modules
const expect = require("chai").expect;
const utils = require("./lib/utils");

describe("Test", () => {
  it("Test passed", () => {
    let result = utils.setStart("N", [1, 2], "GAGAGAGAA", [5, 5]);
    expect(result).be.eql([[1, 3], "N"]);
    result = utils.setStart("E", [3, 3], "AADAADADDA", [5, 5]);
    expect(result).be.eql([[5, 1], "E"]);
  });
});
