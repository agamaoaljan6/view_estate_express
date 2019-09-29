const healthCheck = (req, res, next) => {
    res.send({status: 'OK', statusCode: 200})
}

module.exports = healthCheck;