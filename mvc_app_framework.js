//framework
class Model {
    constructor(data){
        this.data = data
    }
}

class View {
    constructor(model){
        this.model = model;
    }
    render(){
        returen `view`;
    }
}

class Constroller{
    constructor(routes){
        routes = routes
    }
    route(path){
        this.route[path].render()
    }
}