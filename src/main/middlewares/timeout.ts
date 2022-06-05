import { Request, Response, NextFunction } from 'express';

export const timeout = (req: Request, res: Response, next: NextFunction):void => {
    res.setTimeout(10000, () => {
        res.status(408).send({
            code: 408,
            message: 'Request has timed out'
        })
    })
    next();
}
