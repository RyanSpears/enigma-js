module app.models {

    export interface IEnigma {
        //scrambleLetter: () => app.models.Character
    }

    export class Enigma implements IEnigma {

        constructor(rotor1: app.models.IRotor,
            rotor2: app.models.IRotor,
            rotor3: app.models.IRotor){
        }
    }
}
