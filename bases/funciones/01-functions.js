"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activeBatisignal = () => {
        return 'Batiseñar activada!';
    };
    console.log(typeof activeBatisignal);
    const heroName = returnName();
})();
