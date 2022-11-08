const mongoose = require('mongoose')

// Modelo de la categoria en la base de datos
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema)