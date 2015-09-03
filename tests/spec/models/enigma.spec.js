describe("Enigma ", function () {

    var enigma, rotor1, rotor2, rotor3, plugboard;

    beforeEach(function () {
        if(!plugboard) {
            plugboard = new Models.PlugBoard(['A','B', 'C']);
        }
        
        if(!rotor1) {
            rotor1 = new Models.Rotor("Rotor 1", 0, ['A', 'B', 'C']);
        }

        if(!rotor2) {
            rotor2 = new Models.Rotor("Rotor 2", 0, ['D', 'E', 'F']);
        }

        if(!rotor3) {
            rotor3 = new Models.Rotor("Rotor 3", 0, ['G', 'H', 'I']);
        }

        if (!enigma) {
            enigma = new Models.Enigma(rotor1, rotor2, rotor3, ['A', 'B', 'C']);
        }
    });

    it("Rotor1 of the Enigma machine should its name set to 'Rotor 1'", function () {
        expect('Rotor 1').toBe(enigma.rotor1.name);
    });

    it("Rotor2 of the Enigma machine should its name set to 'Rotor 2'", function () {
        expect('Rotor 2').toBe(enigma.rotor2.name);
    });

    it("Rotor3 of the Enigma machine should its name set to 'Rotor 3'", function () {
        expect('Rotor 3').toBe(enigma.rotor3.name);
    });

    it("Initial orientation of Rotor 1 is 65", function () {
        expect(65).toBe(enigma.orientationRotor1);
    });

    it("Initial orientation of Rotor 1 is 66", function () {
        expect(66).toBe(enigma.orientationRotor2);
    });

    it("Initial orientation of Rotor 1 is 67", function () {
        expect(67).toBe(enigma.orientationRotor3);
    });
});