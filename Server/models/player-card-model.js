const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const PlayerCardSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    profileUrl: { type: String },
    profileName: { type: String, required: true },
    briefInfo: { type: String, required: true },
    fullInfo: { type: String, required: true },
    rank: { type: String, required: false },
    sex: { type: String },
    mainRoles: { type: Array, required: true },
    offRoles: { type: Array },
    categories: { type: Array, required: true },
    server: { type: String, required: true },

    //далее отдаленно-опциональное
    summonerName: { type: String },
    supportedLinks: { type: String },  //like opgg
    country: { type: String },
    city: { type: String },
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