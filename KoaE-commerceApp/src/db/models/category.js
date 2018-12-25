import mongoose from 'mongoose';

let categorySchema = new mongoose.Schema({
  name: String,
  level: Number,
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

categorySchema.toJSON = function () {
  return {
     /* eslint-disable no-underscore-dangle */
    id: this._id,
    name: this.name,
    level: this.level,
    parent_id: this.parent_id,
  };
};

export default mongoose.model('Category', categorySchema);
