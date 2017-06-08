var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
    iotID: String,
    iot_data: String,
    iot_date: { type: Date, defalut: Date.now}
});

module.exports = mongoose.model('data', dataSchema);
