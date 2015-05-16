/**
 * Created by ryanspears on 17/05/15.
 */
describe("Rotor objects", function(){

    var rotor;

    beforeEach(function(){
        rotor = new app.models.Rotor('Rotor 1');
    });

    it("Rotor should its name set to 'Rotor 1'", function(){
        expect('Rotor 1').toBe(rotor.name);
    });
});
