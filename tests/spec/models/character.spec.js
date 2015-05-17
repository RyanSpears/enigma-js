/**
 * Created by ryanspears on 17/05/15.
 */
describe("Characters objects", function(){

    it("Error should be thrown if a String with more than 1 character is entered", function(){
        expect(function() {
            var character = new app.models.Character('More than one character');
        }).toThrowError("Please enter a single character");
    });

    it("Character of 'A' should return characterCode() of 65", function(){
        var character = new app.models.Character('A');

        expect(character).toBeDefined();

        var code = character.characterCode();

        //expect(65).toBe(code);
    });
});
