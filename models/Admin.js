import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

adminSchema.plugin(passportLocalMongoose);

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);
