const { ObjectId } = require('bson');
const {Schema, model} = require('mongoose');

const PlayerCardSchema = new Schema( {
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    profileUrl: {type: String },
    nickName: {type: String, required: true},
    briefInfo: {type: String,  required: true},
    fullInfo: {type: String, required: true},
    rank: {type: String, required: false},
    sex: {type: String},
    mainRoles: {type: Array, required: true},
    offRoles: {type: Array},
    categories: {type: Array, required: true}

})

// const PlayerCardSchema = new Schema( {
//     user: {type: Schema.Types.ObjectId, ref: 'User'},
//     profileUrl: {type: String },
//     nickName: {type: String, },
//     briefInfo: {type: String, },
//     fullInfo: {type: String, },
//     rank: {type: String, required: false},
//     sex: {type: String},
//     mainRoles: {type: Array, },
//     offRoles: {type: Array},
//     categories: {type: Array, }

// })


module.exports = model('PlayerCard', PlayerCardSchema);