var app;
(function (app) {
    var models;
    (function (models) {
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
                    var right = new app.models.Character(String.fromCharCode(65 + index));
                    var left = new app.models.Character(element);
                    var characterPair = new app.models.CharacterPair(right, left);
                    pairs.push(characterPair);
                });
                return pairs;
            };
            return Rotor;
        })();
        models.Rotor = Rotor;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=rotor.js.map