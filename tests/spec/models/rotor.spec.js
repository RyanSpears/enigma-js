describe("Rotor One ", function () {

    var rotor;

    beforeEach(function () {
        if (!rotor) {
            rotor = new Models.Rotor('Rotor 1', 0, ['E','K','M','F','L','G','D','Q','V','Z','N','T','O','W','Y','H','X','U','S','P','A','I','B','R','C','J']);
        }
    });

    it("Rotor One should its name set to 'Rotor 1'", function () {
        expect('Rotor 1').toBe(rotor.name);
    });

    it("Rotor One's initial orientation should be '0'", function () {
        expect(0).toBe(rotor.orientation);
    });

    it("'A' should map to be 'E", function () {
        // Arrange

        // Act
        var rightCharacter = rotor.getRight().character[0];

        // Assert
        expect(rightCharacter).toBe('A');
    });
});
