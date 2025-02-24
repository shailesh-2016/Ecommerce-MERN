const { Schema, model } = require("mongoose");
const { common } = require("../utils/commonSchema");

const catSchema = new Schema(
  {
    cat_name: {
      ...common,
      unique: [true, "Category already exist"],
    },
  },
  {
    timestamps: true,
  }
);

exports.Category = model("Category", catSchema);
