const mongoose = require('mongoose');
require('dotenv').config;

mongoose
    .connect(`mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.lhlyvrl.mongodb.net/`)
    .catch(error=>handleError(error)) //Manejo de error recomendado por la documentación

const db = mongoose.connection;

// 