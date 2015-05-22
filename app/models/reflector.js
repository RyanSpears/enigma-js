var app;
(function (app) {
    var models;
    (function (models) {
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
                    var right = new app.models.Character(String.fromCharCode(65 + index));
                    var left = new app.models.Character(element);
                    var characterPair = new app.models.CharacterPair(right, left);
                    pairs.push(characterPair);
                });
                return pairs;
            };
            Reflector.prototype.scramble = function (character) {
                return this.characterPairs[character.characterCode() - 65].left;
            };
            return Reflector;
        })();
        models.Reflector = Reflector;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=reflector.js.map