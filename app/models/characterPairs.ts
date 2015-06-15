/// <reference path="character.ts" />

module Models {

    export interface ICharacterPair {
        right: Models.ICharacter;
        left: Models.ICharacter;
    }

    export class CharacterPair implements ICharacterPair {
        right: Models.Character;
        left: Models.Character;

        constructor(right: Models.Character, left: Models.Character) {
            this.right = right;
            this.left = left;
        }
    }
}
