(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let batman: Hero = {
        name: 'Bruce Wayne',
        age: 35,
        powers: ['Intelligence', 'Martial Arts'],
    }

    let superman : Hero = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Strength', 'Flight'],
        getName() {
            return this.name;
        }
    }
    
})();