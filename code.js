function hasCycle(graph) {
        for (let node in graph) {
        let visitedNodes = [];
        if (findCycle(graph, node, visitedNodes)) {
            return true;
        }
    }
    return false;
}

function findCycle(graph, node, visitedNodes) {
    visitedNodes.push(node);
    for (let neighbor of graph[node]) {
        if (!visitedNodes.includes(neighbor)) {
            let cycleFound = findCycle(graph, neighbor, visitedNodes);
            if (cycleFound) {
                return true;
            } else {
                visitedNodes = [node];
            }
        } else {
            return true;
        }
    }
    return false;
}
module.exports = { hasCycle };
