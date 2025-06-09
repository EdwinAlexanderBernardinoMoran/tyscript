(() => {
    let flash: {name: string, age?:number, powers: string[]} = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Speed', 'Time Travel'],
    }

    flash = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Strength', 'Flight'],
        // getName() {
        //     return this.name;
        // }
    }
})();