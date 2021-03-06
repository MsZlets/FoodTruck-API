import mongoose from 'mongoose';
import Review from './review';
let Schema = mongoose.Schema;


let ReviewSchema = new Schema({
  title: {
    type: String,
    required: true
},
  text: String,
  foodtruck: {
  type: Schema.Types.ObjectId,
  ref: "FoodTruck",
  required: true
}

});
module.exports = mongoose.model('Review', ReviewSchema)
