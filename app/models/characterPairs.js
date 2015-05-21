var app;
(function (app) {
    var models;
    (function (models) {
        var CharacterPair = (function () {
            function CharacterPair(right, left) {
                this.right = right;
                this.left = left;
            }
            return CharacterPair;
        })();
        models.CharacterPair = CharacterPair;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=characterPairs.js.map