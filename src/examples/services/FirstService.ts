import { RegisterAsSingleton } from "../../decorators/RegisterAsSingleton.decorator.ts";
import { IServicesShow } from "./IServicesShow.ts";

@RegisterAsSingleton
export class FirstService implements IServicesShow {

    public show(): void {
        console.log('This is the FirstService!')
    }
    
}