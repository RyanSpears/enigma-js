var Models;
(function (Models) {
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
        Character.prototype.zeroBasedCharCode = function () {
            if (!this.character) {
                throw new Error('Character is not defined');
            }
            return this.character.charCodeAt(0) - 65;
        };
        return Character;
    })();
    Models.Character = Character;
})(Models || (Models = {}));
//# sourceMappingURL=character.js.map