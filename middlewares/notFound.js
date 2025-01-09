const notFound = (req,res,next) => {
    return res.status(404).json({
        message: "Risorsa non trovata",
        status: 404,
        error: "Not Found"
    })
}

    module.exports = notFound;
