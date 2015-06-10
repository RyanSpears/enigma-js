var app;
(function (app) {
    var models;
    (function (models) {
        var Character = (function () {
            function Character(character) {
                this.character = character;
                if (character.length > 1 || character.length == 0) {
                    throw new Error('Please enter a single character');
                }
                this.value = character;
            }
            Character.prototype.characterCode = function () {
                if (!this.value) {
                    throw new Error('Character is not defined');
                }
                return this.value.charCodeAt(0);
            };
            Character.prototype.zeroBasedCharCode = function () {
                if (!this.value) {
                    throw new Error('Character is not defined');
                }
                return this.character.charCodeAt(0) - 65;
            };
            return Character;
        })();
        models.Character = Character;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=character.js.map