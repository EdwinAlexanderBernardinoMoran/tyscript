"use strict";
(() => {
    var _a;
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Speed', 'Time Travel'],
    };
    flash = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Strength', 'Flight'],
        getName() {
            return this.name;
        }
    };
    // Se usa el operador de encadenamiento opcional para evitar errores si getName no existe
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
    // PROBLEMAS CON LA DEFINICION EN LINEA
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
