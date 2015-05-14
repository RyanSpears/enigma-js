/**
 * Created by ryanspears on 14/05/15.
 */
module app.models {
    export interface IRotor{
        name: string;
    }

    export class Rotor implements IRotor {
        name: string

        constructor(name: string){
            this.name = name;
        }
    }
}
