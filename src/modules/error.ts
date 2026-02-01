export class AppError extends Error {
    constructor(
        message:string,
        public code:string,
        public statusCode = 400
    ){
        super(message)
    }
}
