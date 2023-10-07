import bcrypt from 'bcryptjs';
import mongoose, {Schema} from 'mongoose';

interface IUser {
  mail: string;
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    mail: {type: String, unique: true},
    username: String,
    password: String,
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.mail;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre('save', async function () {
  if (this.isModified('mail')) {
    this.set('mail', this.get('mail')?.toLowerCase());
  }

  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.get('password')!, 12);
    this.set('password', hashedPassword);
  }
});

export const User = mongoose.model<IUser>('User', userSchema);
