describe("Rotor objects", function () {

    var rotor;

    beforeEach(function () {
        if (!rotor) {
            rotor = new Models.Rotor('Rotor 1', 0, ['B', 'C', 'D']);
        }
    });

    it("Rotor should its name set to 'Rotor 1'", function () {
        expect('Rotor 1').toBe(rotor.name);
    });

    it("Rotor's initial orientation should be '0'", function () {
        expect(0).toBe(rotor.orientation);
    });

    it("Rotor should its name set to 'Rotor 1'", function () {
        expect('Rotor 1').toBe(rotor.name);
    });

    it("getRight() should return 'A' before rotating", function () {
        // Arrange

        // Act
        var rightCharacter = rotor.getRight().character[0];

        // Assert
        expect(rightCharacter).toBe('A');
    });

    it("getLeft() should return 'B' before rotating", function () {
        // Arrange

        // Act
        var leftCharacter = rotor.getLeft().character[0];

        // Assert
        expect(leftCharacter).toBe('B');
    });

    it("rotation() should move orientation to 1", function () {
        // Arrange

        // Act
        rotor.rotate();

        // Assert
        expect(rotor.orientation).toBe(1);
    });

    it("getRight() should return 'B' after one rotation", function () {
        // Arrange

        // Act
        var rightCharacter = rotor.getRight().character[0];

        // Assert
        expect(rightCharacter).toBe('B');
    });

    it("getLeft() should return 'C' after one rotation", function () {
        // Arrange

        // Act
        var leftCharacter = rotor.getLeft().character[0];

        // Assert
        expect(leftCharacter).toBe('C');
    });

    it("Second rotation() should move orientation to 2", function () {
        // Arrange

        // Act
        rotor.rotate();

        // Assert
        expect(rotor.orientation).toBe(2);
    });

    it("getRight() should return 'C' after two rotations", function () {
        // Arrange

        // Act
        var rightCharacter = rotor.getRight().character[0];

        // Assert
        expect(rightCharacter).toBe('C');
    });

    it("getLeft() should return 'D' after two rotations", function () {
        // Arrange

        // Act
        var leftCharacter = rotor.getLeft().character[0];

        // Assert
        expect(leftCharacter).toBe('D');
    });

    it("Third rotation() should move orientation back to 0", function () {
        // Arrange

        // Act
        rotor.rotate();

        // Assert
        expect(rotor.orientation).toBe(0);
    });

    it("getRight() should return 'A' after three rotations", function () {
        // Arrange

        // Act
        var rightCharacter = rotor.getRight().character[0]

        //Assert
        expect(rightCharacter).toBe('A');
    });

    it("getLeft() should return 'B' after three rotations", function () {
        // Arrange

        // Act
        var leftCharacter = rotor.getLeft().character[0];

        // Assert
        expect(leftCharacter).toBe('B');
    });

    it("getLeft() should return 'B' after orientation has been set to 0 which is 'A'", function () {
        // Arrange
        rotor.setOrientation(0)

        // Act
        var left = rotor.getLeft().character[0]

        // Assert
        expect(left).toBe('B');
    });

    it("getLeft() should return 'C' after orientation has been set to 1 which is 'B'", function () {
        // Arrange
        rotor.setOrientation(1)

        // Act
        var left = rotor.getLeft().character[0]

        // Assert
        expect(left).toBe('C');
    });

    it("getLeft() should return 'D' after orientation has been set to 2 which is 'C'", function () {
        // Arrange
        rotor.setOrientation(2)

        // Act
        var left = rotor.getLeft().character[0]

        // Assert
        expect(left).toBe('D');
    });
});
