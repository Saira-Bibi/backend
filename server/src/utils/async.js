const asyncHandler = (requesthandler) => (req, res, next) => {
    Promise.resolve(requesthandler(req, res, next)).
    catch(err => next(err));
}

export {asyncHandler}

/*const asyncHandler = (fn)=> async( req,res,next,error) =>{
    try{
        await fn(req, res, next);
    }
    catch(error){
        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }

}*/