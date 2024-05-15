// REST ARGUMENTS: resto de argumentos que le puedes pasar a una funcion

(() => {
    const fullName = (firstName: string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Joseph', 'Kent', 'New Argument');
    console.log({superman});
    
})()