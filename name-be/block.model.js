const mongoose = require('mongoose');

const { Schema } = mongoose;

const blockSchema = new Schema({
  blockHeight: {
    type: Number,
    required: true,
  },
  miner: {
    type: String,
    required: true,
  },
  transactions: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  reward: {
    type: Number,
    required: true,
  },
  gasLimit: {
    type: Number,
    required: true,
  },
  gasUsed: {
    type: Number,
    required: true,
  },
});

const Block = mongoose.model('Block', blockSchema);

module.exports = Block;