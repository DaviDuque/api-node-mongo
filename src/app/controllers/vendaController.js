const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
const Venda = require('../models/vendas');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const vendas = await Venda.find().populate('user');
        return res.send({ vendas });
        
    } catch (err) {
        return res.st.send({ error: 'Eror ao buscar Venda' });
    }
});

router.get('/:vendaId', async (req, res) => {
    try {
        const venda = await Venda.findById(req.params.vendaId).populate('user');
        return res.send({ venda });
    } catch (err) {
        return res.status(400).send({ error: 'Eror ao buscar Venda' });
    }
});

router.post('/', async (req, res) => {
    try {
        const venda = await Venda.create({ ...req.body, user: req.userId });
        return res.send({ venda });
    } catch (err) {
        return res.status(400).send({ error: 'Eror create new venda' });
    }

});

router.delete('/:vendaId', async (req, res) => {
    try {
        await Venda.findOneAndDelete(req.params.VendaId);
        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Eror delete Venda' });
    }
});

router.get('/ranking/1', async (req, res) => {
    try {
        const vendas = await Venda.aggregate([
            {
                $group: {
                    _id: '$user',
                    count: { $sum: 1 }
                }
            }
        ]);

        return res.send({ vendas });
    } catch (err) {
        return res.st.send({ error: 'Eror ao buscar Venda 1' });
    }
});


module.exports = app => app.use('/Vendas', router);
