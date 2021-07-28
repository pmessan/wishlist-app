import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
// import findOrCreate from 'mongoose-findorcreate';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

export default mongoose.models.User || mongoose.model('User', userSchema);
