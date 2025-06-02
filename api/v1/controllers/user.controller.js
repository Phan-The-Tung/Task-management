const User = require("../models/user.model");
const md5 = require("md5");

// [GET] /api/v1/tasks
module.exports.register = async (req, res) => {
    req.body.password = md5(req.body.password);

    const exitsEmail = await User.findOne({
        email: req.body.email,
        deleted: false
    })

    if(exitsEmail) {
        res.json({
            code: 400,
            message: "Email đã tồn tại"
        })

    } else {
        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        })
        user.save();

        const token = user.token;

        res.cookie("token", token);

        res.json({
            code: 200,
            message: "Tạo tài khoản thành công",
            token: token
        })

    }

};