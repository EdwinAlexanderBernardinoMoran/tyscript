"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["Mute"] = 0] = "Mute";
        AudioLevel[AudioLevel["Low"] = 1] = "Low";
        AudioLevel[AudioLevel["Medium"] = 5] = "Medium";
        AudioLevel[AudioLevel["High"] = 10] = "High";
        AudioLevel[AudioLevel["Max"] = 100] = "Max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAduio = AudioLevel.Medium;
    console.log(currentAduio);
    console.log(AudioLevel);
})();
// El uso de las numeraciones ayudan a trabajar con valores que tengan un sentido semántico o visualmente facil de leer
