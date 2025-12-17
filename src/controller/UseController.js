class UserController {
    //TODO
    // constructor() {
    //     this.userModel = require("../models/UserModel");
    // }

    async getList(req, res) {
        try {
            const users = await this.userModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;
