describe("Reflector objects", function () {

    var reflector;

    beforeEach(function () {
        if (!reflector) {
            reflector = new app.models.Reflector(['X','Y', 'Z']);
        }
    });

    it("scramble() should return 'X' when passed in an 'A'", function () {
        expect(reflector.scramble(new app.models.Character('A')).character[0]).toBe('X');
    });

    it("scramble() should return 'Y' when passed in an 'B'", function () {
        expect(reflector.scramble(new app.models.Character('B')).character[0]).toBe('Y');
    });

    it("scramble() should return 'Z' when passed in an 'C'", function () {
        expect(reflector.scramble(new app.models.Character('C')).character[0]).toBe('Z');
    });
});
