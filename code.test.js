const { hasCycle } = require('./code.js');

test('graph with cycle', () => {
    let graph = {
        'A': ['B', 'C'],
        'B': ['A', 'C'],
        'C': ['A', 'B']
    };
    expect(hasCycle(graph)).toBe(true);
});

test('graph without cycle', () => {
    let graph = {
        'A': ['B'],
        'B': ['C'],
        'C': []
    };
    expect(hasCycle(graph)).toBe(false);
});

test('single node graph', () => {
    let graph = {
        'A': []
    };
    expect(hasCycle(graph)).toBe(false);
});
