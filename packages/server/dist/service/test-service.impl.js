export class TestServiceImpl {
    msg = 'I am test service';
    constructor() { }
    run() {
        setTimeout(() => {
            console.log(this.msg);
        }, 5000);
    }
}
//# sourceMappingURL=test-service.impl.js.map