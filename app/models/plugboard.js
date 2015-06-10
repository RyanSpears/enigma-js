var app;
(function (app) {
    var models;
    (function (models) {
        var PlugBoard = (function () {
            function PlugBoard(cipher) {
                this.characterPairs = this.generateCharacterPairs(cipher);
            }
            PlugBoard.prototype.getLeft = function (right) {
                return this.characterPairs[right.zeroBasedCharCode()].left;
            };
            PlugBoard.prototype.getRight = function (left) {
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
            PlugBoard.prototype.generateCharacterPairs = function (cipher) {
                var pairs = new Array();
                cipher.forEach(function (element, index) {
                    var charCode = element.charCodeAt(0);
                    if (charCode < 65 || charCode > 90)
                        throw "Incorrect character entered in cipher";
                    var right = new app.models.Character(String.fromCharCode(65 + index));
                    var left = new app.models.Character(element);
                    var characterPair = new app.models.CharacterPair(right, left);
                    pairs.push(characterPair);
                });
                return pairs;
            };
            return PlugBoard;
        })();
        models.PlugBoard = PlugBoard;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=plugboard.js.map