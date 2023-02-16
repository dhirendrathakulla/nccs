const { mysqlHelper } = require("../../../common")

const httpStatus = require("http-status")

(() =>{
    module.exports = async (data) =>{
            let dbResponse = {status:httpStatus.BAD_REQUEST, message:"error"}
            let query = `INSERT into` data.username
            const res = await mysqlHelper.query(query);
            if(res && res.inserted >0){
                dbResponse.status = httpStatus.OK;
                dbResponse.message ="User created successfully !!";
            }
            return dbResponse;
    }
})()