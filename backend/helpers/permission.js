const userModel = require("../models/userModel")

// this function will check the role of user is ADMIN or not..
// if it is Admin then give the permission to change.\

const uploadProductPermission = async(userId) => {
    const user = await userModel.findById(userId)

    if(user.role === 'ADMIN'){
        return true
    }

    return false
}


module.exports = uploadProductPermission