"use strict";
(() => {
    let myCustomVariable = 'Edwin';
    console.log(typeof myCustomVariable);
    myCustomVariable = 22;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Edwin',
        age: 22,
        powers: [1, 2, 3],
    };
    console.log(typeof myCustomVariable);
})();
