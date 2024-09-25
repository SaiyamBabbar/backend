const User = require("../models/User");
const Address = require("../models/Address");

exports.createUser = async (req, res) => {
  try {
    const { name, address } = req.body;

    const user = new User({ name });
    await user.save();

    const newAddress = new Address({ address, user: user._id });
    await newAddress.save();

    user.addresses.push(newAddress._id);
    await user.save();

    res
      .status(201)
      .json({ message: "User and address created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user and address" });
  }
};
