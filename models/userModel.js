const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add the user name"],
        },
        email: {
            type: String,
            required: [true, "Please add the user email address"],
            unique: [true, "Email address already taken"],
        },
        password: {
            type: String,
            required: [true, "Please add the user password"],
        },
    },
    {
        timestamps: true,
    }
);

/*userSchema.methods.createJWT = function () {
    return jwt.sign(
      { userId: this._id, name: this.name },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    )
  }*/

module.exports = mongoose.model("User", userSchema);