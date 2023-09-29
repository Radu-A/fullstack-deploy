const Provider = require("../models/providers");
require("../utils/mongodb");

const getProviders = async (req, res) => {
  try {
    const data = await Provider.find({}, "-__v");
    res.status(202).json(data);
    console.log(data);
  } catch (error) {
    res.status(404).json({
      Error: error,
    });
    console.log(error);
  }
};

module.exports = { getProviders };
