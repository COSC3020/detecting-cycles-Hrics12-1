# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst-case time complexity of the function is $\Theta(V^2 + VE)$, where $V$ is the number of nodesin the graph and $E$ is the number of edges. This is because the function iterates over all nodes in the graph and contributes to a $\Theta(V)$ complexity. It also performs a depth-first search from each node and visits all the nodes and edges in the graph. In the worst case this is $\Theta(V + E)$ complexity. The function checks if a node has been visited by iterating over the visitedNodes array which in the worst case needs to iterate over all nodes, adding another $\Theta(V)$ complexity. The overall time complexity becomes $\Theta(V^2 + VE)$.

Source:
I used chatGPT to help me make the test and workflow for the action. I'm not that familiar with Github to know how to do that
https://www.geeksforgeeks.org/detect-cycle-undirected-graph/
I used my old repo https://github.com/COSC3020/detecting-cycles-Hrics12

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
