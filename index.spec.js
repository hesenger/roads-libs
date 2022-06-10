const roadsAndLibraries = require("./index");

it("example 3 cities", () => {
  const res = roadsAndLibraries(3, 2, 1, [
    [1, 2],
    [3, 1],
    [2, 3],
  ]);
  expect(res).toEqual(4);
});

it("most silly example where it's cheap to build lib than a road 🤷‍♂️", () => {
  const res = roadsAndLibraries(6, 2, 5, [
    [1, 3],
    [3, 4],
    [2, 4],
    [1, 2],
    [2, 3],
    [5, 6],
  ]);
  expect(res).toEqual(12);
});

it("NOT a challenge example: are needed 2 libs + roads", () => {
  const res = roadsAndLibraries(6, 2, 1, [
    [1, 3],
    [3, 4],
    [2, 4],
    [1, 2],
    [2, 3],
    [5, 6],
  ]);
  expect(res).toEqual(8);
});
