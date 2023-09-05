export function Injector <T extends { new (...args: any[]): Object}> (target: string, value: any) {
    return function (constructor: T) {
        return class extends constructor {
            constructor (...args: any[]) {
                super();
                Reflect.set(this, target, value);
            }
        }
    }
}