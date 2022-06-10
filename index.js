function roadsAndLibraries(n, c_lib, c_road, connections) {
  const cities = connections.reduce((memo, item) => {
    memo[item[0]] = memo[item[0]] || { library: false, connectedTo: [] };
    memo[item[1]] = memo[item[1]] || { library: false, connectedTo: [] };
    memo[item[0]].connectedTo.push(item[1]);
    memo[item[1]].connectedTo.push(item[0]);
    return memo;
  }, {});

  let libraries = 0;
  Object.keys(cities).forEach((city) => {
    const hasLibrary = cities[city].library;
    const visited = [];
    const hasAccessToLibrary = dfs(city, cities, visited);
    if (!hasLibrary && !hasAccessToLibrary) {
      cities[city].library = true;
      libraries++;
    }
  });

  return libraries * c_lib;
}

function dfs(origin, cities, visited) {
  const city = cities[origin];
  if (city.library) {
    return true;
  }
  if (visited.includes(origin)) {
    return false;
  }
  visited.push(origin);
  return city.connectedTo.some((city) => {
    return dfs(city, cities, visited);
  });
}

module.exports = roadsAndLibraries;
