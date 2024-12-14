import { model, Schema } from 'mongoose';
import TUser from './users.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { string } from 'zod';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progrss', 'blocked'],
    },
    isDeleted: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

//hasing the given password down below !
userSchema.pre('save', async function (next) {
  const user: Record<string, any> = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt_rounds));
  next();
});

//vanishing the password value from the database to the user when the api is called !
userSchema.post('save', function (doc, next) {
  const user: Record<string, any> = doc;
  user.password = '';
  next();
});

const UserModel = model<TUser>('user', userSchema);
export default UserModel;
