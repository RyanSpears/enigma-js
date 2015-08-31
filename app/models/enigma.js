/// <reference path="rotor.ts" />
var Models;
(function (Models) {
    var Enigma = (function () {
        function Enigma(rotor1, rotor2, rotor3, initialSettings) {
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