class Stack{
    constructor(){
        this.top = -1
        this.stack = []
    }
    pushelement(ele){
       this.top  = this.top + 1;
       this.stack.push(ele)
    }
    popelement(){
        if (this.top !== -1){
            this.stack.pop()
            this.top = this.top - 1;
        }
        else{
            return 'cannot pop, stack is empty'
        }
    }
    topelement(){
        if (this.top !== -1){
            return this.stack[this.top]
        }
        else{
            return `stack is empty`
        }
    }
}

obj = new Stack();
console.log(obj.topelement())
console.log(obj.popelement())
obj.pushelement(1);
obj.pushelement(2);
obj.popelement()
console.log(obj.topelement())