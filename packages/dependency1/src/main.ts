abstract class Dep {
    name: string

    logName(): void {
        console.log(this.name)
    }
}

export class Dep1 extends Dep {
    constructor() {
        super()
        this.name = 'Dep1'
    }
}


export class Dep2 extends Dep {
    constructor() {
        super()
        this.name = 'Dep2'
    }
}
