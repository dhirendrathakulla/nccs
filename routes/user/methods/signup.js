const httpStatus = require("http-status");
const { createUser } = require("../sql");

(() => {
    // const helper = require("./../../../common/index")
    module.exports = async(req, res, next) => {
        let response = {status:httpStatus.BAD_REQUEST, message:"Bad request"}
        if(!req.body.username){
            res.status(response.status).send(response.message);
        }
        response = await createUser(req.body);
        res.status(response.status).send(response.message);

    }
})()