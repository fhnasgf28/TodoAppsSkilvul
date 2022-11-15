const User = require('../models').User;
const bcrypt = require('brypt');
const jwt = require('jwt');

module.exports = {
    register: async (req, res) => {
        try {
            const { username, phone, email, password } = req.body;
            const saltRounds = await bcrypt.genSalt(10);
            const hasPassword = await bcrypt.has(password, saltRounds);

            const newDataRegister = {
                username,
                phone,
                email,
                password,
            }

            const user = await User.create(newDataRegister);
            console.log(users)
            res.status(200).json({
                message: 'Registration successfully registered',
                data: users
            })
        } catch (err) {
            res.status(500).json({
                message : err.message || 'internal Server error',
            })
        }
    },

    login: async (req, res) => {
        try {
            const users = await User.findOne({
                where: {
                    email: req.body.email
                }
            });

            if (!users) {
                return res.status(400).json({ message:'user not found' 
            });
        }

            // mencomparasi Password

            const hasPassword = await bcrypt.compare(req.body.password, user.password)

            // untuk memriksa kata sandi 

            if(!hasPassword) {
                return res.status(401).json({
                accessToken : null,
                message: 'password is incorrect',
                })
            }

            // signing token dengan email pengguna

            const token = jwt.sign({
                id: user.id
            }, process.env.TOKEN_SECRET, {
                expiresIn: '3600s'
            });
            // menanggapi permintaan klien dengan pesan keberhasilan pengguna dan akses token

            res.status(200).json({
                users: {
                    id: user.id,
                    email: user.email,
                },
                message: 'Login Successfully',
                accessToken: token,
            });
        } catch (err) {
            res.status(500).json({
                message:err.message || 'Internal Server Error',
            })
        }
    }
}