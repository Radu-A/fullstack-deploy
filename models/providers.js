const mongoose = require("mongoose");
require("../utils/mongodb");

// Design schema for better order
const objectSchema = {
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  CIF: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  url_web: {
    type: String,
    required: true,
  },
};
// Create schema
const providerSchema = new mongoose.Schema(objectSchema);
// Create model
const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;
