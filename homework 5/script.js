let input_name=prompt("enter the dogs name:");
let input_kind=prompt("What kind of dog is it");
let animal={
    name: input_name,
    kind: input_kind,

    speak: function(){
        let dog_speak=prompt("What whould you like the dog to say?:");
        alert(`${this.name} the ${this.kind} says ${dog_speak}`);
        return dog_speak;
    }

};
animal.speak();