class StringBuilder {
    #value
    

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
    return  this.#value;
    }
    

    padStart(str) {
        return this.#value.unshift(str);
    }
    
    
    padEnd(str) {
        return this.#value.push(str);
    }
   
    padBoth(str) {
    
}



}





const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


