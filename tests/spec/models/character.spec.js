describe("Characters objects", function(){

    it("Error should be thrown if a String with more than 1 character is entered", function(){
        expect(function() {
            var character = new Models.Character('More than one character');
        }).toThrowError("Please enter a single character");
    });

    it("Error should be thrown if a a lowercase character is entered", function(){
        expect(function() {
            var character = new Models.Character('a');
        }).toThrowError("Please enter a alphabetical character");
    });

    it("Character of 'A' should return characterCode() of 65", function(){
        // Arrange
        var character = new Models.Character('A');

        expect(character).toBeDefined();

        // Act
        var code = character.characterCode();

        // Assert
        expect(code).toBe(65);
    });

    it("Character of 'Z' should return characterCode() of 90", function(){

        // Arrange
        var character = new Models.Character('Z');

        expect(character).toBeDefined();

        // Act
        var code = character.characterCode();

        // Assert
        expect(code).toBe(90);
    });
});
