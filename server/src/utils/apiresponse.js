class api{
    constructor(statusCode, message, data = "Sucess"){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this .sucess = statusCode >= 200 && statusCode < 300;
        
    }
}