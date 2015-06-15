describe("PlugBoard objects", function () {

    var plugboard;

    beforeEach(function () {
        if (!plugboard) {
            plugboard = new Models.PlugBoard(['B','C', 'D']);
        }
    });

    it("PlugBoard should have 3 character pairs", function(){
        expect(plugboard.characterPairs.length).toBe(3);
    });

    it("getLeft() should return 'B' for 'A'", function(){
        var a = new Models.Character('A');
        expect(plugboard.getLeft(a).character).toBe('B');
    });

    it("getRight() should return 'A' for 'B'", function(){
        var b = new Models.Character('B');
        expect(plugboard.getRight(b).character).toBe('A');
    });

    it("getLeft() should return 'C' for 'B'", function(){
        var b = new Models.Character('B');
        expect(plugboard.getLeft(b).character).toBe('C');
    });

    it("getRight() should return 'B' for 'C'", function(){
        var c = new Models.Character('C');
        expect(plugboard.getRight(c).character).toBe('B');
    });

    it("getLeft() should return 'D' for 'C'", function(){
        var c = new Models.Character('C');
        expect(plugboard.getLeft(c).character).toBe('D');
    });

    it("getRight() should return 'C' for 'D'", function(){
        var d = new Models.Character('D');
        expect(plugboard.getRight(d).character).toBe('C');
    });
});