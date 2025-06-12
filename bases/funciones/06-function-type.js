"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello, ${name}`;
    const saveTheWorld = () => 'The world has been saved!';
    // Aca se detallan los tipos de funciones que se pueden asignar a myFunction y el dato especicamente que se le asigna
    let myFunction;
    // let myFunction: (a: number, b: number) => number;
    // let myFunction: ( a: string) => string;
    // let myFunction: () => string;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction("Juan"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
