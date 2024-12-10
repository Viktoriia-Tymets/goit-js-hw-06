class StringBuilder {
    #value
    

    constructor(initialValue) {
        this.#value = initialValue.value;
    }

    getValue() {
    return  this.#value;
    }
    

    padStart(str) {
        return this.#value;
    }
    
    
    padEnd(str) {
        return this.#value
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


