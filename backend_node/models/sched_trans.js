const {Schema, model} =  require('../db/connection.js');

const transSchema = new Schema( {
    transactionId: {
        type: Number,
        required: true,
    },
    accountId: {
        type: Number,
        required: true,
    },
    receivingAccountId: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    comment: {
        type: Number,
        required: true,
    },
})

const trans = model("Trans", transSchema)

module.export = trans;
