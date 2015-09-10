describe("Simple Rotor object ", function () {

    var rotor;

    beforeEach(function () {
        if (!rotor) {
            rotor = new Models.Rotor('Simple Rotor', 0, ['C','A','B','E','D']);
        }
    });

    it("Rotor should its name set to 'Simple Rotor'", function () {
        expect('Simple Rotor').toBe(rotor.name);
    });

    it("Rotor's initial orientation should be '0'", function () {
        expect(0).toBe(rotor.orientation);
    });

    it("getLeft() should return 'C' for 'A'", function () {
        // Arrange
        var a = new Models.Character('A');
        
        // Act
        var result = rotor.getLeft(a);
        
       // Assert
        expect(result.character).toBe('C');
    });
    
     it("getRight() should return 'A' for 'C'", function () {
        // Arrange
        var c = new Models.Character('C');
        
        // Act
        var result = rotor.getRight(c);
        
       // Assert
        expect(result.character).toBe('A');
    });
});
