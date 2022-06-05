import { Request, Response } from "express";
import { ControllerCreate } from "../../presentation/protocols/controllers/controller-create";
import { ControllerList } from "../../presentation/protocols/controllers/controller-list";
import { HttpRequest, HttpResponse } from "../../presentation/protocols/http";

export const adaptRouterList = (controller: ControllerList) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            token: req.headers?.authorization,
            params: req.params,
            query: req.query,
            body: req.body
        }

        const httpResponse: HttpResponse = await controller.list(httpRequest);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}

export const adaptRouterCreate = (controller: ControllerCreate) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body
        }


        const httpResponse: HttpResponse = await controller.create(httpRequest);

        res.status(httpResponse.statusCode).json(httpResponse.body);
    }
}
