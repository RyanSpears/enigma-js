module app.models {

    export interface IRotor {
        name: string;
        characterPairs: app.models.ICharacterPair[];
        orientation: number;
        getLeft: () => app.models.Character;
        getRight: () => app.models.Character;
        rotate: () => void;
    }

    export class Rotor implements IRotor {
        name: string;
        characterPairs: app.models.ICharacterPair[];
        orientation: number;

        constructor(name: string, orientation: number, characterPairs: app.models.ICharacterPair[]){
            this.name = name;
            this.orientation = orientation;
            this.characterPairs = characterPairs;
        }

        getLeft(): app.models.ICharacter {
            return this.characterPairs[this.orientation].left;
        }

        getRight(): app.models.ICharacter {
            return this.characterPairs[this.orientation].right;
        }

        rotate(): void {
            this.orientation = this.orientation + 1;

            if(this.orientation > (this.characterPairs.length - 1)){
                this.orientation = 0;
            }
        }
    }
}
