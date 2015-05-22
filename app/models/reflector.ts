module app.models {

    export interface IReflector {
        characterPairs: app.models.ICharacterPair[];
        scramble: (character: app.models.Character) => app.models.Character;
    }

    export class Reflector implements IReflector {

        characterPairs: app.models.ICharacterPair[];

        constructor(cipher: string[]){
            this.characterPairs = this.generateCharacterPairs(cipher);
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

        scramble(character: app.models.Character): app.models.Character {
            return this.characterPairs[character.characterCode() - 65].left;
        }
    }
}