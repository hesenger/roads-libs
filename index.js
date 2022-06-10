function roadsAndLibraries(n, c_lib, c_road, connections) {
  if (c_lib < c_road) {
    return n * c_lib;
  }

  const cities = connections.reduce((memo, item) => {
    memo[item[0]] = memo[item[0]] || { library: false, connectedTo: [] };
    memo[item[1]] = memo[item[1]] || { library: false, connectedTo: [] };
    memo[item[0]].connectedTo.push(item[1]);
    memo[item[1]].connectedTo.push(item[0]);
    return memo;
  }, {});

  // fill keys for isolated cities (without any connection)
  while (Object.keys(cities).length < n) {
    cities[Object.keys(cities).length + 1] = {
      library: false,
      connectedTo: [],
    };
    break;
  }

  let libraries = 0;
  const roads = {};
  Object.keys(cities).forEach((city) => {
    const hasLibrary = cities[city].library;
    const visited = [];
    const hasAccessToLibrary = findLibraryUsingDfs(city, cities, visited);
    if (!hasLibrary && !hasAccessToLibrary) {
      cities[city].library = true;
      libraries++;
    }

    if (hasAccessToLibrary) {
      const queue = [];
      buildRoadsUsingBfs(city, cities, queue, roads);
    }
  });

  const libsCost = libraries * c_lib;
  const roadsCost = Object.keys(roads).length * c_road;
  return libsCost + roadsCost;
}

function buildRoadsUsingBfs(origin, cities, queue, roads) {
  const city = cities[origin];
  if (city.library) {
    return; // do not need to build a road
  }

  queue.push(...city.connectedTo);
  while (queue.length) {
    const neighborIndex = queue.shift();
    const neighborCity = cities[neighborIndex];
    if (neighborCity.library) {
      roads[origin] = neighborIndex; // connect origin to this library\
      return;
    }

    queue.push(...neighborCity.connectedTo);
  }
}

function findLibraryUsingDfs(origin, cities, visited) {
  const city = cities[origin];
  if (city.library) {
    return true;
  }
  if (visited.includes(origin)) {
    return false;
  }
  visited.push(origin);
  return city.connectedTo.some((city) => {
    return findLibraryUsingDfs(city, cities, visited);
  });
}

module.exports = roadsAndLibraries;
