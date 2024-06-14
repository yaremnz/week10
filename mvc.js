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

//Test out Framework

class UserModel extends Model{
    constructor(id, first, last){
        this.data = {id, first: first, last: last};
    }
}

class UserView extends View {
    render(userModel){
        return` # ${userModel.data.id} -<br> ${userModel.data.last}, ${userModel.data.name} </br>`
    }
}
const app = new Controller({
    "/" : new UserView()
});
document.body.innerHTML = app.route("/", new UserModel(123, "Yareli", "Cerda"));
