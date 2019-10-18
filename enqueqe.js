class Queue{
    constructor(d){
        this.cola = this.initqueue(d)
        this.per = d-2
        this.po = d
    }
    initqueue(h){
        this.cola = new Array(h)
        for(let i =0; i<h;i++){
            this.cola[i] = "Persona" + i +"";
            this.cola[h-1] = " " 
        }
               return this.cola
    }
      enqueue(){ 
        let cola = this.cola
        for (let i =0; i<this.po;i++){
            if (cola[(i)] === ' ') {     
                this.per++
                cola[(i)] = "persona" + this.per ; 
                return this.cola
            }
            else if(i === (this.po-1)){ 
                return "\nQueue esta llena\n"; 
            } 
            
        }
         
    } 
    dequeue() { 

        if (this.cola[0] === ' ') { 
            return "\nQueue no contiene ningun valor\n";   
        } 
    
        else { 
            for (let i = 0; i <= this.cola.length -1; i++) { 
                this.cola[i] = this.cola[i + 1]; 
                if(this.cola.length -1 === i){
                    this.cola[i] = ' ';
                }
            }   
        } 
        return (this.cola); 
    }
}

(function(){
 let d = new Queue(8)

 console.log(d.enqueue())
 console.log(d.dequeue())
 console.log(d.dequeue())
 console.log(d.dequeue())
 console.log(d.enqueue())

})()