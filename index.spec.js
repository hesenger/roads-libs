const roadsAndLibraries = require("./index");

it("example 3 connected cities", () => {
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

it("there's an isolated city in this example", () => {
  const res = roadsAndLibraries(5, 6, 1, [
    [1, 2],
    [1, 3],
    [1, 4],
  ]);
  expect(res).toEqual(15);
});

it("complex example described in the challenge", () => {
  const res = roadsAndLibraries(8, 3, 2, [
    [1, 7],
    [1, 3],
    [1, 2],
    [2, 3],
    [5, 6],
    [6, 8],
  ]);
  expect(res).toEqual(17);
});

it("this is NOT an example in the challend, I wrote that: are needed 2 libs + roads", () => {
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
