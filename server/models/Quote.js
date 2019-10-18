const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
    createdAt: {
        type: Number,
        default: Date.now,
    },
})

mongoose.model("Quote", QuoteSchema);