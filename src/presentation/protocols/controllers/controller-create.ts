import { HttpRequest, HttpResponse } from '../http';

export interface ControllerCreate{
    create(httpRequest: HttpRequest):Promise<HttpResponse>
}