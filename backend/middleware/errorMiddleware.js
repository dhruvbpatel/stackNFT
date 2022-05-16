// custom errohandler
const errorHandler = (err,req,res, next) => {
    // if statuscode is what we set in controller then continue else set error code as 500
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack  // we only want stacktrace in production
    })

}

module.exports = {
    errorHandler,
}