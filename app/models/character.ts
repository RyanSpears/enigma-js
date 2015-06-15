module Models {

    export interface ICharacter {
        character: string;
        characterCode: () => number;
        zeroBasedCharCode: () => number;
    }

    export class Character implements ICharacter {
        character: string;

        constructor(character: string) {
            if (character.length > 1 || character.length == 0) {
                throw new Error('Please enter a single character');
            }

            this.character = character;
        }

        characterCode():number {
            if (!this.character) {
                throw new Error('Character is not defined');
            }

            return this.character.charCodeAt(0);
        }

        zeroBasedCharCode():number{
            if (!this.character) {
                throw new Error('Character is not defined');
            }

            return this.character.charCodeAt(0) - 65;
        }
    }
}
