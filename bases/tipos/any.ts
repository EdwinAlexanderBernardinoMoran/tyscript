(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Super Man';
    console.log( (avenger as string).charAt(0) );

    avenger = 150.23256415;
    console.log(<number>avenger.toFixed(2));
    
    console.log(exists);
    console.log(power);
    
})()