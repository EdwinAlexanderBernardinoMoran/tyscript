(() => {
    enum AudioLevel {
        Mute = 0,
        Low = 1,
        Medium = 5,
        High = 10,
        Max = 100
    }

    let currentAduio = AudioLevel.Medium;
    console.log(currentAduio);
    console.log(AudioLevel);
    
})();

// El uso de las numeraciones ayudan a trabajar con valores que tengan un sentido semántico o visualmente facil de leer