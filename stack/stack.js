/**
 * Created by user1 on 2017-04-11.
 */
function Stack(){
    this.items = [];
}

Stack.prototype.push = function(element){
    this.items.push(element);
};

Stack.prototype.pop = function() {
    return this.items.pop();
};

Stack.prototype.peek = function(){
    return this.items[this.items.length -1];
};

Stack.prototype.isEmpty = function(){
    return this.items.length === 0;
};

Stack.prototype.size = function(){
    return this.items.length;
};

Stack.prototype.clear = function(){
    this.items = [];
};
Stack.prototype.print = function(){
    console.log(this.items.toString());
};