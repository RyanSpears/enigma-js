/// <reference path="character.ts" />
/// <reference path="characterPairs.ts" />
/// <reference path="scrambler.ts" />

module Models {

    export class PlugBoard implements Models.IScrambler {
        characterPairs: Models.ICharacterPair[];

        constructor(cipher: string[]){
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
