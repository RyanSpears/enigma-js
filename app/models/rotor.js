var app;
(function (app) {
    var models;
    (function (models) {
        var Rotor = (function () {
            function Rotor(name, orientation, characterPairs) {
                this.name = name;
                this.orientation = orientation;
                this.characterPairs = characterPairs;
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
            return Rotor;
        })();
        models.Rotor = Rotor;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=rotor.js.map