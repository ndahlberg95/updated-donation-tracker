var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
  {
    name: {type: String, required: true},
    kind: {type: String, required: true},
    quantity: {type: Number, required: true},
    size: {type: String, required: true},
    color: [{type: Schema.Types.ObjectId, ref: 'Color'}]
  }
);

// Virtual for Item's URL
ItemSchema
.virtual('url')
.get(function () {
  return '/catalog/items/' + this._id;
});

//Export model
module.exports = mongoose.model('Item', ItemSchema);