import mongoose from 'mongoose';

let invitationSchema = new mongoose.Schema({
  idInvited: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String },
});

invitationSchema.toJSON = function () {
  return {
    idInvited: this.idInvited,
    id: this.id,
    status: this.status,
  };
};

export default mongoose.model('Invitation', invitationSchema);
