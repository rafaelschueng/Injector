import { container } from "../container/Container.ts";

export function RegisterAsSingleton <T extends { new (...args: any[]): Object}> (target:Function) {
    console.log(`Registering the class target: ${target.name}`)
    container.registerAsSingleton(target)
}