(() => {

    // const numbers: (string | number | boolean)[] = [1, 2, '3', 4, 5];
    const numbers: number[] = [1, 2, 4, 5];

    console.log(numbers);

    const villians: string[] = ['Darth Vader', 'Thanos', 'Loki', 'Green Goblin'];

    villians.forEach( v => console.log( v.toUpperCase() ));
    
})();