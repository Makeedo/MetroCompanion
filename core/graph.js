var extractKeys = function (obj) {
    var keys = [], key;
    for (key in obj) {
        Object.prototype.hasOwnProperty.call(obj, key) && keys.push(key);
    }
    return keys;
}

var sorter = function (a, b) {
    return parseFloat(a) - parseFloat(b);
}

var findPaths = function (map, start, end, calculateWeightsCB) {
    var calculateCosts = calculateWeightsCB,
        costs = {},
        open = {'0': [start]},
        predecessors = {},
        keys;

    var addToOpen = function (cost, vertex) {
        var key = "" + cost;
        if (!open[key]) open[key] = [];
        open[key].push(vertex);
    };

    costs[start] = 0;

    while (open) {
        if (!(keys = extractKeys(open)).length) break;

        keys.sort(sorter);

        var key = keys[0],
            bucket = open[key],
            node = bucket.shift(),
            currentCost = parseFloat(key),
            adjacentNodes = map[node] || {};

        if (!bucket.length) delete open[key];

        for (var vertex in adjacentNodes) {
            if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
                var cost = calculateCosts(node, vertex, adjacentNodes[vertex]),
                    totalCost = cost + currentCost,
                    vertexCost = costs[vertex];

                if ((vertexCost === undefined) || (vertexCost > totalCost)) {
                    costs[vertex] = totalCost;
                    addToOpen(totalCost, vertex);
                    predecessors[vertex] = node;
                }
            }
        }
    }

    if (costs[end] === undefined) {
        return null;
    } else {
        return {predecessors: predecessors, totalCosts: costs[end]};
    }

}

var extractShortest = function (predecessors, end) {
    var nodes = [],
        u = end;

    while (u) {
        nodes.push(u);
        u = predecessors[u];
    }

    nodes.reverse();
    return nodes;
}

var findShortestPath = function (map, nodes, calculateWeightsCB) {
    var start = nodes.shift(),
        end,
        path = [],
        totalCosts = 0,
        result = {path: [], travelTime: null},
        shortest,
        paths;

    while (nodes.length) {
        end = nodes.shift();
        paths = findPaths(map, start, end, calculateWeightsCB);
        totalCosts += paths.totalCosts;

        if (paths.predecessors) {
            shortest = extractShortest(paths.predecessors, end);
            if (nodes.length) {
                path.push.apply(path, shortest.slice(0, -1));
            } else {
                result.path = path.concat(shortest);
                result.travelTime = totalCosts;
                return result
            }
        } else {
            return null;
        }

        start = end;
    }
}

var toArray = function (list, offset) {
    try {
        return Array.prototype.slice.call(list, offset);
    } catch (e) {
        var a = [];
        for (var i = offset || 0, l = list.length; i < l; ++i) {
            a.push(list[i]);
        }
        return a;
    }
}

var Graph = function (map, calculateWeights) {
    this.map = map;
    this.calculateWeightsCB = calculateWeights;
};

Graph.prototype.findShortestPath = function (start, end) {
    if (Object.prototype.toString.call(start) === '[object Array]') {
        return findShortestPath(this.map, start, this.calculateWeightsCB);
    } else if (arguments.length === 2) {
        return findShortestPath(this.map, [start, end], this.calculateWeightsCB);
    } else {
        return findShortestPath(this.map, toArray(arguments), this.calculateWeightsCB);
    }
}

Graph.findShortestPath = function (map, start, end, calculateWeightsCB) {
    if (Object.prototype.toString.call(start) === '[object Array]') {
        return findShortestPath(map, start, calculateWeightsCB);
    } else if (arguments.length === 3) {
        return findShortestPath(map, [start, end], calculateWeightsCB);
    } else {
        return findShortestPath(map, toArray(arguments, 1), calculateWeightsCB);
    }
}

module.exports = Graph;



