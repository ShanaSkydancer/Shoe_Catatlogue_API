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

    //   var shoeStock = new ShoeModel({
    //             id : 111,
    //             color : "Black",
    //             brand : "Jimmy Choo",
    //             price : 7000,
    //             size : 5,
    //             in_stock : 8
    //   });

    // ShoeSchema.methods.findSameID = function(callback){
    //     return this.model("ShoeModel").find({id : this.id}, callback);
    // }

    // ShoeSchema.methods.findSameColor = function(callback){
    //     return this.model("ShoeModel").find({color : this.color}, callback);
    // }

    // ShoeSchema.methods.findSameBrand = function(callback){
    //     return this.model("ShoeModel").find({brand : this.brand}, callback);
    // }

    // ShoeSchema.methods.findSamePrice = function(callback){
    //     return this.model("ShoeModel").find({price : this.price}, callback);
    // }

    // ShoeSchema.methods.findSameSize = function(callback){
    //     return this.model("ShoeModel").find({size : this.size}, callback);
    // }

    // ShoeSchema.methods.findSameImStock = function(callback){
    //     return this.model("ShoeModel").find({in_stock : this.in_stock}, callback);
    // }

    //   shoeStock.save(function(err){
    //     if (err){
    //         console.log("Shoe stock save failed.", err);
    //     } else {
    //         console.log("Saved!");
    //         db.close(function(){
    //             console.log("Database connection closed after saving!")
    //         });
    //     }
    //   });

    return {
        ShoeModel
    };
};