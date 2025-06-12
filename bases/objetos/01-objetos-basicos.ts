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
    
})();