class Queue{
    constructor(){
        this.queue = []
    }
    push(ele){
        this.queue.push(ele);
    }
    pop(){
        if (this.queue.length !== 0){
            return this.queue.shift()
        }
        else{
            return `cant pop, queue is empty`
        }
    }
    displayqueue(){
        return `queue >>> [${this.queue}]`
    }
}

queue1 = new Queue();

queue1.push(1)
console.log(queue1.pop())
console.log(queue1.pop())
queue1.push(1)
queue1.push(2)
queue1.push(3)
console.log(queue1.displayqueue())
console.log(queue1.pop())
console.log(queue1.displayqueue())
console.log(queue1.pop())
console.log(queue1.displayqueue())