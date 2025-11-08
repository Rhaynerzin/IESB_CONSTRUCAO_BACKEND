const yup = require('yup');
const mongoose = require('mongoose');


const objectId = yup.string().test('is-objectid', 'ID inválido', value => mongoose.Types.ObjectId.isValid(value));


module.exports = { objectId };