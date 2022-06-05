import { HttpRequest, HttpResponse } from '../http';

export interface ControllerList {
    list(httpRequest: HttpRequest):Promise<HttpResponse>
}