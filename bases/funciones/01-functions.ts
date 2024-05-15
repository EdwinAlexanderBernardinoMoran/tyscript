 (() => {
    const hero:string = 'Flash';

    function returnName(): string {
        return hero
    }

    const activeBatisignal = ():string => {
        return 'Batiseñar activada!'
    }

    console.log(typeof activeBatisignal);

    const heroName = returnName();
    
 })()