module app.models {

    export interface IRotor {
        name: string;
        characterPairs: app.models.ICharacterPair[];
        orientation: number;
        getLeft: () => app.models.Character;
        getRight: () => app.models.Character;
        rotate: () => void;
    }

    export class Rotor implements IRotor {
        name: string;
        characterPairs: app.models.ICharacterPair[];
        orientation: number;

        constructor(name: string, orientation: number, cipher: string[]){
            this.name = name;
            this.orientation = orientation;
            this.characterPairs = this.generateCharacterPairs(cipher);
        }

        getLeft(): app.models.ICharacter {
            return this.characterPairs[this.orientation].left;
        }

        getRight(): app.models.ICharacter {
            return this.characterPairs[this.orientation].right;
        }

        rotate(): void {
            this.orientation = this.orientation + 1;

            if(this.orientation > (this.characterPairs.length - 1)){
                this.orientation = 0;
            }
        }

        generateCharacterPairs(cipher: string[]): app.models.ICharacterPair[]{

            var pairs = new Array<app.models.ICharacterPair>();

            cipher.forEach(function(element, index){
                var charCode = element.charCodeAt(0);
                if(charCode < 65 || charCode > 90)
                    throw "Incorrect character entered in cipher";

                var right = new app.models.Character(String.fromCharCode(65 + index));
                var left = new app.models.Character(element);

                var characterPair =new app.models.CharacterPair(right, left)
                pairs.push(characterPair);
            })

            return pairs;
        }
    }
}
