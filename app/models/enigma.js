/// <reference path="rotor.ts" />
var Models;
(function (Models) {
    var Enigma = (function () {
        function Enigma(rotor1, rotor2, rotor3, initialSettings) {
            this.scramble = function (character) {
                // rotor 1
                // rotor 2
                // rotor 3
                // reflector
                // rotor 3
                // rotor 2
                // rotor 1
                // shift rotors
                return new Models.Character('A');
            };
            this.rotor1 = rotor1;
            this.rotor2 = rotor2;
            this.rotor3 = rotor3;
            this.orientationRotor1 = initialSettings[0].charCodeAt(0);
            this.orientationRotor2 = initialSettings[1].charCodeAt(0);
            this.orientationRotor3 = initialSettings[2].charCodeAt(0);
        }
        return Enigma;
    })();
    Models.Enigma = Enigma;
})(Models || (Models = {}));
//# sourceMappingURL=enigma.js.map