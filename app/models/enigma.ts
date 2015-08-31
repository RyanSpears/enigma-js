/// <reference path="rotor.ts" />

module Models {

    export class Enigma {

        orientationRotor1: number;
        orientationRotor2: number;
        orientationRotor3: number;

        public rotor1: Models.IRotor;
        public rotor2: Models.IRotor;
        public rotor3: Models.IRotor;

        constructor(rotor1: Models.IRotor,
            rotor2: Models.IRotor,
            rotor3: Models.IRotor,
            initialSettings: string[]){

            this.rotor1 = rotor1;
            this.rotor2 = rotor2;
            this.rotor3 = rotor3;

            this.orientationRotor1 = initialSettings[0].charCodeAt(0);
            this.orientationRotor2 = initialSettings[1].charCodeAt(0);
            this.orientationRotor3 = initialSettings[2].charCodeAt(0);
        }
    }
}
