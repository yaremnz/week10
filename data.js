data = [
    {
        id: 123, 
        name: "yareli",
        balances: [
            {
                id: 2345, 
                name: "checking",
                current: 987.87
            },
            {
                id: 4567, 
                name: "savings",
                current: 456.50
            }
        ]
    }
];
class Account{
    constructor(apiObject){
        this.nubmer = apiObject.id
        this.displayName = apiObject.name
        this.balance = apiObject.current
    }
}

class Owner{
    constructor(apiObject){
        this.id = apiObject.id
        this.customer = apiObject.name
        this.accounts = apiObject.balances.map(b => new this.balances(b));
    }
}

const owner = new Owner(data[0])
console.log(JSON.stringify(owner,"",2))