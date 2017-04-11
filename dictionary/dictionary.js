/**
 * Created by user1 on 2017-04-11.
 */
function Dictionary(){
    this.items = {};
}

Dictionary.prototype.has = function(key){
    return key in this.items
};

Dictionary.prototype.set = function(key, value){
    this.items[key] = value;
};

Dictionary.prototype.remove = function(key){
    if(this.has(key)){
        delete this.items[key];
        return true;
    }
    return false;
};

Dictionary.prototype.get = function(key){
    return this.has(key) ? this.items[key] : undefined;
};

Dictionary.prototype.values = function(){
    var values = [];
    for(var k in this.items){
        if(this.has(k)){
            values.push(this.items[k]);
        }
    }
    return values;
}
Dictionary.prototype.getItems = function(){
    return this.items;
}