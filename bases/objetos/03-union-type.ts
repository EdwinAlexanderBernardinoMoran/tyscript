(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: ( string | number | Hero ) = 'Edwin';
    console.log(typeof myCustomVariable);

    myCustomVariable = 22;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Edwin',
        age: 22,
        powers: [1, 2, 3],
    }
    console.log(typeof myCustomVariable);
    
})();