import { Express } from 'express';
import { bodyParser } from '../middlewares/body-parser';
import { contentType } from '../middlewares/content-type';
import { cors } from '../middlewares/cors';
import { timeout } from '../middlewares/timeout';

export default (app: Express): void => {
    app.use(cors);
    app.use(bodyParser);
    app.use(contentType);
    app.use(timeout);
}