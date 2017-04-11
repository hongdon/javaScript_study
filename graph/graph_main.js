/**
 * Created by user1 on 2017-04-11.
 */
$(document).ready(function(){
    console.log('graph init')

    var graph = new Graph();
    var myVertices = ['A','B','C','D','E','F','G','H','I'];

    for(var i=0; i< myVertices.length; i++){
        graph.addVertex(myVertices[i])
    }

    graph.addEdge('A','B');
    graph.addEdge('A','C');
    graph.addEdge('A','D');
    graph.addEdge('C','D');
    graph.addEdge('C','G');
    graph.addEdge('D','G');
    graph.addEdge('D','H');
    graph.addEdge('B','E');
    graph.addEdge('B','F');
    graph.addEdge('E','I');

    console.log('##############인접리스트###############');
    console.log(graph.toString());

    console.log('############### bfs###################');
    function printNode(value) {
        console.log('탐색한 정점 : ' + value);
    }
    graph.bfs(myVertices[0], printNode)

    console.log('############### 수정된 BFS ###################');
    var shortestPathA = graph.modifiedBFS(myVertices[0]);
    console.log(shortestPathA)
})
