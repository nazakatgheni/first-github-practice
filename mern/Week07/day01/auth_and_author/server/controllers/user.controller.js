const User = require('../models/user.model');
const secret = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    //? Register new user

    register: async (req, res) => {
        try {
            const potentialUser = await User.findOne({ email: req.body.email });
            if (potentialUser) {
                return res.status(400).json({
                    message: "Email already exists"
                })
            }
            const newUser = await User.create(req.body);
            const userToken = jwt.sign({ _id: newUser._id, email: newUser.email }, secret, { expiresIn: "2h" })
            // console.log(userToken)
            res.cookie('usertoken', userToken, { httpOnly: true }).json({
                message: "Success",
                user: newUser
            })
            // res.json({ message: 'Success', user: newUser });
        } catch (err) {
            console.log("err", err)
            return res.status(400).json(err)
        }
    },

    //Login an existing user

    login: async (req, res) => {

        try {
            const user = await User.findOne({ email: req.body.email });
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password)

                if (passwordMatch) {
                    const userToken = jwt.sign({ _id: user._id, email: user.email }, secret, { expiresIn: "2h" });
                    res.cookie('usertoken', userToken, { httpOnly: true }).json({
                        message: "Success",
                        user: user
                    });
                } else {
                    res.status(400).json({
                        message: "Invalid login attempt"
                    })
                }
            } else {
                res.status(400).json({
                    message: "Invalid login attempt"
                })
            }
        } catch (err) {
            console.log("err", err)
            return res.status(400).json(err)
        }
    },

    //Logout an existing user
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200).json({
            message: "You logged out successfully!!!"
        })
    },

    getAllUsers: (req, res) => {
        User.find()
            .then(allUsers => {
                console.log("ALL USERS: ", allUsers);
                res.json({ users: allUsers })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}