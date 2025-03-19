class ExpressError extends Error{
    constructor(statusCode, message, name){
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.name = name;
    }
}

module.exports = ExpressError;