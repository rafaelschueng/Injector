import { container } from "../../container/Container.ts";

export function Inject (token: Function): PropertyDecorator {
    return (target: any, propertyKey: PropertyKey) => {
        Reflect.set(target, propertyKey, container.resolve(token));
    }
}