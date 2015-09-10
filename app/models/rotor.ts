/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />

module Models {

    export interface IRotor {
        name: string;
        characterPairs: Models.ICharacterPair[];
        orientation: number;
        getLeft: (right: Models.ICharacter) => Models.Character;
        getRight: (left: Models.ICharacter) => Models.Character;
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
        
       getLeft(right: Models.ICharacter): Models.ICharacter {
            return this.characterPairs[right.zeroBasedCharCode()].left;
        }

       getRight(left: Models.ICharacter): Models.ICharacter {
            var right: Models.ICharacter = null;

            this.characterPairs.forEach(function(element){
                if(element.left.character === left.character){
                    right = element.right;
                }
            });

            if(!right){
                throw "Character not found";
            }

            return right;
        }

        // getLeft(): Models.ICharacter {
        //     return this.characterPairs[this.orientation].left;
        // }

        // getRight(): Models.ICharacter {
        //     return this.characterPairs[this.orientation].right;
        // }

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
