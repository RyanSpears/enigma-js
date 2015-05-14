/**
 * Created by ryanspears on 14/05/15.
 */
var app;
(function (app) {
    var models;
    (function (models) {
        var Rotor = (function () {
            function Rotor(name) {
                this.name = name;
            }
            return Rotor;
        })();
        models.Rotor = Rotor;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
//# sourceMappingURL=rotor.js.map