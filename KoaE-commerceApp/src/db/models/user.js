import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  type: { type: String, enum: ['admin', 'superAdmin', 'client'] },  
  adress: String,
  mail: String,
  password: String,
});

userSchema.toJSON = function() {
  return {
    id: this._id,
    firstName: this.firstName,
    lastName: this.lastName,
    age: this.age,
    type: this.type,
    adress: this.adress,
    mail: this.mail,
    password: this.password,
  };
};

export default mongoose.model('User', userSchema);