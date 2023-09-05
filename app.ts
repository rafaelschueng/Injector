import { FirstService } from "./src/examples/services/FirstService.ts";
import { Inject } from "./src/decorators/examples/PropertyInjector.decorator.ts";
import { IServicesShow } from "./src/examples/services/IServicesShow.ts";

export class App {
    @Inject(FirstService) 
    private declare _firstService: IServicesShow;

    public showAll (): void {
        this._firstService.show();
    }
}