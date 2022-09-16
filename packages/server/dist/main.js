import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import bodyParser from "koa-bodyparser";
import { Dep1, Dep2 } from 'dependency1';
import { TestServiceImpl } from "./service/test-service.impl";
const dep1 = new Dep1();
const dep2 = new Dep2();
dep1.logName();
dep2.logName();
const ts = new TestServiceImpl();
ts.run();
const app = new Koa();
const router = new Router();
// @ts-ignore
router.get("/", async (ctx, next) => {
    ctx.body = 'hello world';
    await next();
});
// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
// Routes
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log("Koa started");
});
//# sourceMappingURL=main.js.map
