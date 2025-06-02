(() => {
    function callBatman(): void {
        return; // No retorna nada explícitamente
    }

    const callSuperman = (): void => {
        return; // También no retorna nada explícitamente
    }

    const a = callBatman();
    console.log(a); // undefined
})();

// Void es un tipo de dato que indica que una función no retorna nada.
// En TypeScript, si una función no retorna un valor explícito, su tipo de retorno es void.