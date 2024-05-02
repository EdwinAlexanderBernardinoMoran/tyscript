// const msg: string = 'hola mundo';

// const hero = {
//     name: 'Iroman',
//     age: 45
// }

// hero.age = 50;
// console.log(hero.age + 1);

// funcion anonima autoinvocada, per,ite crear varios archivos en el mismo projecto y de esa manera no cae dentro del scope global y no marca error
(() => {
    const a:number = 10;

    console.log(a);
})()