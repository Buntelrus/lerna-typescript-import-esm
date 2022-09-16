import { Dep1 } from 'dependency1'

export class TestServiceImpl {
    msg: string = 'I am test service'

    constructor() {
        const d = new Dep1()
        d.logName()
    }

    run(): void {
        setTimeout(() => {
            console.log(this.msg)
        }, 5000)
    }
}
