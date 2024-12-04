import { model, Schema } from 'mongoose';
import TUser from './users.interface';

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
      type: Boolean,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  {
    timestamps: true
  }
);

const UserModel = model<TUser>("user", userSchema)
export default UserModel
