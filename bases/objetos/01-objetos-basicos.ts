(() => {
    let flash: {name: string, age?:number, powers: string[], getName?: () => string} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Speed', 'Time Travel'],
    }

    flash = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Strength', 'Flight'],
        getName() {
            return this.name;
        }
    }

    // Se usa el operador de encadenamiento opcional para evitar errores si getName no existe
    console.log(flash.getName?.());


    // PROBLEMAS CON LA DEFINICION EN LINEA

    

    let batman: {name: string, age?:number, powers: string[], getName?: () => string} = {
        name: 'Bruce Wayne',
        age: 35,
        powers: ['Intelligence', 'Martial Arts'],
    }

    let superman : {name: string, age?:number, powers: string[], getName?: () => string} = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Strength', 'Flight'],
        getName() {
            return this.name;
        }
    }
    
})();