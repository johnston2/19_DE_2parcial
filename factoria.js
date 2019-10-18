class Factorial{
    constructor(){
        this.costo = null
        this.succession = []
        this.tabla = []
    }

    value(n){
    this.n = n
    this.succession[this.costo] = n
    this.costo +=1
    this.tabla[this.costo]= this.costo
    return n<2 ? 1 : this.n*this.value(n-1);
    }

    intCost(){
        return this.costo;
    }

    VectorSuccession(){
        return this.succession;
    }

    vectorTable(){
        return this.table;
    }
}

let f = new Factorial
f.value(3)
f.intCost();
f.VectorSuccession();
f.vectorTable();