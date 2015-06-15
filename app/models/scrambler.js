/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />
var Models;
(function (Models) {
    var Scrambler = (function () {
        function Scrambler(cipher) {
            this.characterPairs = this.generateCharacterPairs(cipher);
        }
        Scrambler.prototype.getLeft = function (right) {
            return this.characterPairs[right.zeroBasedCharCode()].left;
        };
        Scrambler.prototype.getRight = function (left) {
            var right = null;
            this.characterPairs.forEach(function (element) {
                if (element.left.character === left.character) {
                    right = element.right;
                }
            });
            if (!right) {
                throw "Character not found";
            }
            return right;
        };
        Scrambler.prototype.generateCharacterPairs = function (cipher) {
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
        return Scrambler;
    })();
    Models.Scrambler = Scrambler;
})(Models || (Models = {}));
//# sourceMappingURL=scrambler.js.map