"use strict";

const mongoose = require('mongoose');

module.exports = function(mongoUrl){
    mongoose.connect(mongoUrl);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('Connected to the DB!');
      db.close(function(){
        console.log("Database connection closed!")
        });
    });

    //My specific Shoe Schema
      var shoeSchema = new mongoose.Schema({
          id : Number,
          color : String,
          brand : String,
          price : Number,
          size : Number,
          in_stock : Number
      });

      const ShoeModel = mongoose.model('ShoeModel', shoeSchema);

      var shoeStock = new ShoeModel({
                id : 111,
                color : "Black",
                brand : "Jimmy Choo",
                price : 7000,
                size : 5,
                in_stock : 8
      });

      shoeStock.save(function(err){
        if (err){
            console.log("Shoe stock save failed.", err);
        } else {
            console.log("Saved!");
            db.close(function(){
                console.log("Database connection closed after saving!")
            });
        }
      });

    return {
        ShoeModel
    };
};