"use strict";
(() => {
    let batman = {
        name: 'Bruce Wayne',
        age: 35,
        powers: ['Intelligence', 'Martial Arts'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Strength', 'Flight'],
        getName() {
            return this.name;
        }
    };
})();
