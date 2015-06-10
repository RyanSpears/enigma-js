module app.models {

    export interface ICharacter {
        value: string;
        characterCode: () => number;
        zeroBasedCharCode: () => number;
    }

    export class Character implements ICharacter {

        value: string;

        constructor(private character: string) {
            if (character.length > 1 || character.length == 0) {
                throw new Error('Please enter a single character');
            }

            this.value = character;
        }

        characterCode():number {
            if (!this.value) {
                throw new Error('Character is not defined');
            }

            return this.value.charCodeAt(0);
        }

        zeroBasedCharCode():number{
            if (!this.value) {
                throw new Error('Character is not defined');
            }

            return this.character.charCodeAt(0) - 65;
        }
    }
}
