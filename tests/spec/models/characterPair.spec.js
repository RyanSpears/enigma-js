describe("CharacterPair objects", function(){

    var characterPair;

    beforeEach(function(){
        characterPair = new app.models.CharacterPair(new app.models.Character('A'), new app.models.Character('B'));
    })

    it("CharacterPair should be defined", function(){
        expect(characterPair).toBeDefined();
    });

    it("CharacterPair's left Character should be 'B'", function(){

        var left = characterPair.left;

        expect(left).toBeDefined();
        expect(left.character).toBe('B');
    });

    it("CharacterPair's right Character should be 'A'", function(){

        var left = characterPair.right;

        expect(left).toBeDefined();
        expect(left.character).toBe('A');
    });
});
