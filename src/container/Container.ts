enum InstanceLifetime {
    Singleton,
    Transient,
}

type Container = {
    instance?: Function;
    class: Function
    lifetime: InstanceLifetime;
}

export class ContainterManager {
    
    private records: Map<string, Container> = new Map<string, Container>();

    private exists (name: string): Boolean {
        return this.records.has(name)
    }

    public registerAsSingleton (className: Function, token?: string): void {
        this.register(className, InstanceLifetime.Singleton, token);
    }

    public registerAsTransient (className: Function, token?: string): void {
        this.register(className, InstanceLifetime.Transient, token)
    }

    public resolve <T> (token: Function): T { 
        if (this.exists(token.name)) {
            const target = this.records.get(token.name);

            if (target?.lifetime === InstanceLifetime.Singleton) {
                if (target.instance) return target.instance as T
                const instance = Reflect.construct(target.class, [])
                this.records.set(token.name, {class: token, lifetime: target.lifetime, instance: instance})
                return instance as T
            }

            if (target?.lifetime === InstanceLifetime.Transient) {
                return Reflect.construct(target.class, []) as T;
            }
            
        }
        throw new Error(`The token: ${token.name} is not registered!`)
    }

    private register (className: Function, lifetime: InstanceLifetime, token?:string): void {
        if (this.exists(className.name)) throw new Error ('This guy has previously registered!')
        this.records.set(token || className.name, { class: className, lifetime: lifetime })
    }

}

export const container = new ContainterManager();