/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />
var Models;
(function (Models) {
    var Reflector = (function () {
        function Reflector(cipher) {
            this.characterPairs = this.generateCharacterPairs(cipher);
        }
        Reflector.prototype.generateCharacterPairs = function (cipher) {
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
        Reflector.prototype.scramble = function (character) {
            var charCode = character.zeroBasedCharCode();
            return this.characterPairs[charCode].left;
        };
        return Reflector;
    })();
    Models.Reflector = Reflector;
})(Models || (Models = {}));
//# sourceMappingURL=reflector.js.map