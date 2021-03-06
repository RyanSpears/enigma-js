/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />

module Models {

    export interface IReflector {
        characterPairs: Models.ICharacterPair[];
        scramble: (character: Models.Character) => Models.Character;
    }

    export class Reflector implements IReflector {

        characterPairs: Models.ICharacterPair[];

        constructor(cipher: string[]){
            this.characterPairs = this.generateCharacterPairs(cipher);
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

        scramble(character: Models.Character): Models.Character {
            var charCode = character.zeroBasedCharCode();

            return this.characterPairs[charCode].left;
        }
    }
}