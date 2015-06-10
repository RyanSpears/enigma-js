module app.models {

    export interface IPlugBoard {
        characterPairs: app.models.ICharacterPair[];
        getLeft: (right: app.models.ICharacter) => app.models.Character;
        getRight: (left: app.models.ICharacter) => app.models.Character;
    }

    export class PlugBoard implements IPlugBoard {
        characterPairs: app.models.ICharacterPair[];

        constructor(cipher: string[]){
            this.characterPairs = this.generateCharacterPairs(cipher);
        }

        getLeft(right: app.models.ICharacter): app.models.ICharacter {
            return this.characterPairs[right.zeroBasedCharCode()].left;
        }

        getRight(left: app.models.ICharacter): app.models.ICharacter {
            var right: app.models.CharacterPair = null;

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
