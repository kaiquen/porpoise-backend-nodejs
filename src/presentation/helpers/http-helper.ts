import { ServerError } from "../errors/server-error";
import { HttpResponse } from "../protocols/http";

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: {
        code: 200,
        success: data
    }
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: {
    code: 500,
    error: new ServerError(error.stack).message
  },
  error: error
})

export const invalidParam = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: {
    code: 404,
    error: error.message
  }
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    code: 400,
    error: error.message
  }
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: {
    code: 201,
    success: data
  }
})
