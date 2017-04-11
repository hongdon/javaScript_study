;/**
 * Created by user1 on 2017-04-11.
 */
function Graph() {
    this.vertices = [];
    this.adjList = new Dictionary();
}

Graph.prototype.addVertex = function(v){
    this.vertices.push(v);
    this.adjList.set(v, []);
};
Graph.prototype.addEdge = function(v, w){
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
};
Graph.prototype.toString = function(){
    var s = '';
    for(var i=0; i<this.vertices.length; i++){
        s += this.vertices[i] + '->';
        var neighbors = this.adjList.get(this.vertices[i]);
        for(var j=0; j<neighbors.length;j++){
            s += neighbors[j] + ' ';
        }
        s += '\n';
    }
    return s;
};

Graph.prototype.initializeColor = function(){
    var color = [];
    for (var i=0; i<this.vertices.length;i++){
        color[this.vertices[i]] = 'white'
    }
    return color;
};

Graph.prototype.bfs = function(v, callback){
    var color = this.initializeColor();
    var queue = new Queue();
    queue.enqueue(v);
    while (!queue.isEmpty()){
        var u = queue.dequeue();
        var neighbors = this.adjList.get(u);
        color[u] = 'grey';

        for(var i=0; i<neighbors.length; i++){
            var w = neighbors[i];
            if(color[w]==='white'){
                color[w] = 'grey';
                queue.enqueue(w);
            }
            color[u] = 'black';
            if(callback){
                callback(u);
            }
        }
    }
};
Graph.prototype.modifiedBFS = function(v){
    var color = this.initializeColor();
    var queue = new Queue();
    var d = [];
    var pred = [];

    queue.enqueue(v);

    for(var i=0; i<this.vertices.length;i++){
        d[this.vertices[i]] = 0;
        pred[this.vertices[i]] = null;
    }

    while(!queue.isEmpty()){
        var u = queue.dequeue();
        var neighbors = this.adjList.get(u);
        color[u] = 'grey';
        for(i=0;i<neighbors.length; i++){
            var w = neighbors[i];
            if(color[w] === 'white'){
                color[w] = 'grey';
                d[w] = d[u] +1;
                pred[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = 'black';
    }
    return {
        distances : d,
        predecessors : pred
    }
}