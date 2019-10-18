class Fibonaci{
    constructor(){
        this.costo = null
        this.suc = []
        this.tabl = []
    }
    value(t){
    this.suc[this.costo] = t
    this.costo +=1
    this.tabl[this.costo]= this.costo
    if (t>2){
        return t * this.value(t-1)
    }
    return t
 
    
    } 
    cost(){
        return this.costo
    } 
    succession(){
        return this.suc
    } 
    table(){
        return this.tabl
    }
       
}

let f = new Fibonaci
f.value(6)
f.cost(6)
