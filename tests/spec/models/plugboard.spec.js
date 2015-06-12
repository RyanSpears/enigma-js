describe("PlugBoard objects", function () {

    var plugboard;

    beforeEach(function () {
        if (!plugboard) {
            plugboard = new app.models.PlugBoard(['B','C', 'D']);
        }
    });

    it("getLeft() should return 'B' for 'A'", function(){
        var a = new app.models.Character('A');
        expect(plugboard.getLeft(a).value).toBe('B');
    });

    it("getRight() should return 'A' for 'B'", function(){
        var b = new app.models.Character('B');
        expect(plugboard.getRight(b).value).toBe('A');
    });

    it("getLeft() should return 'C' for 'B'", function(){
        var b = new app.models.Character('B');
        expect(plugboard.getLeft(b).value).toBe('C');
    });

    it("getRight() should return 'B' for 'C'", function(){
        var c = new app.models.Character('C');
        expect(plugboard.getRight(c).value).toBe('B');
    });

    it("getLeft() should return 'D' for 'C'", function(){
        var c = new app.models.Character('C');
        expect(plugboard.getLeft(c).value).toBe('D');
    });

    it("getRight() should return 'C' for 'D'", function(){
        var d = new app.models.Character('D');
        expect(plugboard.getRight(d).value).toBe('C');
    });
});