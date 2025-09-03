class ApiError extends Error {
    constructor( 
        message = "some thing wrong",
         statusCode,
          error = [],
          stack = ""
          
        ) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack;
        if (stack) {
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
        }
}

export default ApiError;