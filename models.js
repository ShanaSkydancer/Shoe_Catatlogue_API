"use strict";

const mongoose = require('mongoose');

module.exports = function(mongoUrl){
    mongoose.connect(mongoUrl);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Connected to the DB!');
    });

    //My specific Shoe Schema
    var ShoeSchema = new mongoose.Schema({
          brand : String,
          size : Number,
          color : String,
          price : Number,
          in_stock : Number
    });

    const ShoeModel = mongoose.model('ShoeModel', ShoeSchema);

    return {
        ShoeModel
    };
};