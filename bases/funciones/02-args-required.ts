(() => {
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Edwin', 'Alexander');
    console.log(name);
    
})()