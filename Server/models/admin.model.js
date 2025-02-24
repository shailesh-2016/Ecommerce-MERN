const { Schema, model } = require("mongoose");
const { common } = require("../utils/commonSchema");

const adminSchema = new Schema(
  {
    a_username: {
      ...common,
      unique: [true, "username should be unique"],
    },
    a_email: {
      ...common,
      unique: [true, "email should be unique"],
    },
    a_password: common,
    a_roleId: {
      ...common,
      type: Number,
      default: 0,
      enum: [0, 1, 2],
    },
  },
  {
    timestamps: true,
  }
);

exports.Admin = model("Admin", adminSchema);
