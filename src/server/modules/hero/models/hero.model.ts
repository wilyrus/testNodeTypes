import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const heroSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    saying: String
  },
  {
    collection: 'Heroes'
  }
);

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
