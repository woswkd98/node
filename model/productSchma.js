const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name: { type: String, require: true },
    immediatelyPrice: { type: Number, require: true },
    minPrice: { type: Number, require: true },
    category: { type: String, require: true },
    trade: { type: String, require: true },
    text: { type: String, require: true },
    created: { type: Date, default: Date.now() },
    endTime: { type: Number, require: true },
})
module.exports = mongoose.model('product', productSchema);