const roadsAndLibraries = require("./index");

it("example", () => {
  const res = roadsAndLibraries(3, 2, 1, [
    [1, 2],
    [3, 1],
    [2, 3],
  ]);
  expect(res).toEqual(4);
});
