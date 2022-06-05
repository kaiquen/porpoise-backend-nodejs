import { Router } from "express";
import { adaptRouterCreate } from "../adapters/express-middleware-adapter";
import { makeUser } from "../factories/user-factory";

export default (router: Router):void => {
    router.post('/user', adaptRouterCreate(makeUser()));
}