// has a count and three methods add, sub, reset

class Counter{
    constructor(){
        this.reset()
    }
    reset(){
        this.count = 0;
    }
    add(){
        this.count++;
    }
    sub(){
        this.count--;
    }
}

//Tests who is coming in with or without hats

cap = new Counter();
noCap = new Counter()

noCap.add()
cap.add()
cap.add()
cap.add()
noCap.add()
noCap.sub()// took off his hat while entering


console.log(cap.count, noCap.count)