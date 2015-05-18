module app.models {
    export interface ICharacterPair {
        right: app.models.ICharacter;
        left: app.models.ICharacter;
    }

    export class CharacterPair implements ICharacterPair {
        right: app.models.Character;
        left: app.models.Character;

        constructor(right: app.models.Character, left: app.models.Character) {
            this.right = right;
            this.left = left;
        }
    }
}
