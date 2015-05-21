var app;
(function (app) {
    var models;
    (function (models) {
        var Character = (function () {
            function Character(character) {
                if (character.length > 1 || character.length == 0) {
                    throw new Error('Please enter a single character');
                }
                this.character = character;
            }
            Character.prototype.characterCode = function () {
                if (!this.character) {
                    throw new Error('Character is not defined');
                }
                return this.character.charCodeAt(0);
            };
            return Character;
        })();
        models.Character = Character;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=character.js.map