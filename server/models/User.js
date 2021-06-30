import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  usermane:  String,
  email: String,
  password: String,
});

module.exports = User;