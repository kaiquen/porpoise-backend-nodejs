export interface ObejectError {
    statusCode: number;
    body: {
        code: number
        errors: string[]
    },
}