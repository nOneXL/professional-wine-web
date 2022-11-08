import * as mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 80,
  },
  text: {
    type: String,
    required: true,
    minLength: 10,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Article = mongoose.model("Article", articleSchema);

export { Article };
