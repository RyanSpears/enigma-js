/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />

module Models {

    export interface IRotor {
        name: string;
        characterPairs: Models.ICharacterPair[];
        orientation: number;
        getLeft: () => Models.Character;
        getRight: () => Models.Character;
        rotate: () => void;
        setOrientation: (orientation: number) => void;
    }

    export class Rotor implements IRotor {
        name: string;
        characterPairs: Models.ICharacterPair[];
        orientation: number;

        constructor(name: string, orientation: number, cipher: string[]){
            this.name = name;
            this.orientation = orientation;
            this.characterPairs = this.generateCharacterPairs(cipher);
        }

        getLeft(): Models.ICharacter {
            return this.characterPairs[this.orientation].left;
        }

        getRight(): Models.ICharacter {
            return this.characterPairs[this.orientation].right;
        }

        setOrientation(orientation: number): void {
            this.orientation = orientation;
        }

        rotate(): void {
            this.orientation = this.orientation + 1;

            if(this.orientation > (this.characterPairs.length - 1)){
                this.orientation = 0;
            }
        }

        generateCharacterPairs(cipher: string[]): Models.ICharacterPair[]{

            var pairs = new Array<Models.ICharacterPair>();

            cipher.forEach(function(element, index){
                var charCode = element.charCodeAt(0);
                if(charCode < 65 || charCode > 90)
                    throw "Incorrect character entered in cipher";

                var right = new Models.Character(String.fromCharCode(65 + index));
                var left = new Models.Character(element);

                var characterPair =new Models.CharacterPair(right, left)
                pairs.push(characterPair);
            })

            return pairs;
        }
    }
}
