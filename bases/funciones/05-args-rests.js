"use strict";
// REST ARGUMENTS: resto de argumentos que le puedes pasar a una funcion
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'New Argument');
    console.log({ superman });
})();
