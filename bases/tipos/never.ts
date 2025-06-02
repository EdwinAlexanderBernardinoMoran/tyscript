(() => {
    const error = (message: string): never => {
        throw new Error(message);
    }

    error("This function always throws an error and never returns a value.");
})();