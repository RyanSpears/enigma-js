/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />
var Models;
(function (Models) {
    var Rotor = (function () {
        function Rotor(name, orientation, cipher) {
            this.name = name;
            this.orientation = orientation;
            this.characterPairs = this.generateCharacterPairs(cipher);
        }
        Rotor.prototype.getLeft = function () {
            return this.characterPairs[this.orientation].left;
        };
        Rotor.prototype.getRight = function () {
            return this.characterPairs[this.orientation].right;
        };
        Rotor.prototype.setOrientation = function (orientation) {
            this.orientation = orientation;
        };
        Rotor.prototype.rotate = function () {
            this.orientation = this.orientation + 1;
            if (this.orientation > (this.characterPairs.length - 1)) {
                this.orientation = 0;
            }
        };
        Rotor.prototype.generateCharacterPairs = function (cipher) {
            var pairs = new Array();
            cipher.forEach(function (element, index) {
                var charCode = element.charCodeAt(0);
                if (charCode < 65 || charCode > 90)
                    throw "Incorrect character entered in cipher";
                var right = new Models.Character(String.fromCharCode(65 + index));
                var left = new Models.Character(element);
                var characterPair = new Models.CharacterPair(right, left);
                pairs.push(characterPair);
            });
            return pairs;
        };
        return Rotor;
    })();
    Models.Rotor = Rotor;
})(Models || (Models = {}));
//# sourceMappingURL=rotor.js.map