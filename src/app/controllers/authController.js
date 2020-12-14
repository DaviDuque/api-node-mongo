const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    });
}

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({
            user,
            token: generateToken({ id: user.id }),
        });
    } catch (err) {
        return res.status(400).send({ error: 'registration faleid' })
    }
});

router.post('/authentication', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('password');
    if (!user)
        return res.status(400).send({ error: 'email ou password incorretos' });

    if (!await bcrypt.compare(password, user.password))
        res.status(200).send({ error: 'email ou password incorretos' });
    user.password = 'tipo 1';
    res.send({
        user,
        token: generateToken({ id: user.id }),
    });


});

module.exports = app => app.use('/auth', router);