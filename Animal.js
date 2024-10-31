export class Animal{
    constructor(type,legs){
        this.type = type;
        this.legs = legs;
    }
    make(sound = "Loud sound"){
        console.log(sound);
    }
}

export class cat extends Animal{
    constructor(type,legs,tail){
        super(type,legs);
        this.tail = tail;
    }
    //overriding
    make(sound = "meow"){
        console.log(sound);
    }
}