describe("Rotor objects", function () {

    var rotor;

    beforeEach(function () {
        if (!rotor) {
            rotor = new app.models.Rotor('Rotor 1', 0, ['B','C', 'D']);
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
        expect(rotor.getRight().character[0]).toBe('A');
    });

    it("getLeft() should return 'B' before rotating", function () {
        expect(rotor.getLeft().character[0]).toBe('B');
    });

    it("rotation() should move orientation to 1", function () {
        rotor.rotate();
        expect(1).toBe(rotor.orientation);
    });

    it("getRight() should return 'B' after one rotation", function () {
        expect(rotor.getRight().character[0]).toBe('B');
    });

    it("getLeft() should return 'C' after one rotation", function () {
        expect(rotor.getLeft().character[0]).toBe('C');
    });

    it("Second rotation() should move orientation to 2", function(){
        rotor.rotate();
        expect(2).toBe(rotor.orientation);
    });

    it("getRight() should return 'C' after two rotations", function(){
        expect(rotor.getRight().character[0]).toBe('C');
    });

    it("getLeft() should return 'D' after two rotations", function(){
        expect(rotor.getLeft().character[0]).toBe('D');
    });

    it("Third rotation() should move orientation back to 0", function(){
        rotor.rotate();
        expect(0).toBe(rotor.orientation);
    });

    it("getRight() should return 'A' after three rotations", function(){
        expect(rotor.getRight().character[0]).toBe('A');
    });

    it("getLeft() should return 'B' after three rotations", function(){
        expect(rotor.getLeft().character[0]).toBe('B');
    });
});
