import mongoose from "mogoose";

// normal approach
// const userSchema = new mongoose.Schema({
//     userName: String,
//     email: String,
//     isActive: Boolean
// })

// professional approach
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      // required: [true, 'password is required'],               // required field ke andar hm custom message bhi de skte hai
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
