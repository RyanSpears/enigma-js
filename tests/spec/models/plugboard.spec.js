describe("PlugBoard objects", function () {

    var plugboard;

    beforeEach(function () {
        if (!plugboard) {
            plugboard = new app.models.PlugBoard(['B','C', 'D']);
        }
    });

    it("getLeft() should return 'D' after two rotations", function(){
        var c = new app.models.Character('A');
        expect(plugboard.getLeft(c).value).toBe('B');
    });
});