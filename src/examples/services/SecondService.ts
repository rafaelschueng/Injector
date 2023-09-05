import { RegisterAsSingleton } from "../../decorators/RegisterAsSingleton.decorator.ts";
import { IServicesShow } from "./IServicesShow.ts";

@RegisterAsSingleton
export class SecondService implements IServicesShow {
    show(): void {
        console.log('This is the SecondService!')
    }
}