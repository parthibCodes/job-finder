export const asyncHandler = (requiredHandler)=>{
    return (req,res,next)=>{Promise.resolve(requiredHandler(req,res,next)).catch(next);
    };
};