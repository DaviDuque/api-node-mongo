const mongoose = require('../../database/index');
const bcrypt = require('bcryptjs');

  const VendaSchema = new mongoose.Schema({
    product: {
      type: String,
      require:true
    },
    description: {
      type: String,
      require:true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      require:true,
    },
    value: {
      type: Number,
      require:true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
  });


  const Venda = mongoose.model('Venda', VendaSchema);

module.exports  = Venda;
