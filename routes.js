"use strict";

module.exports = function (models){

    //All shoes
    const shoeStock = function (req, res, next){
            models.ShoeModel.find({})
                .then(function (ShoeModel){
                    res.json(ShoeModel);
                })
                .catch(function (err) {
                    return next(err);
                    console.error(err);
                });
        };

    //Add shoe
    const newStock = function (req, res, next){
        var newShoe = new models.ShoeModel(req.body);
        console.log(newShoe);

        newShoe.save().then(function (shoe) {
                res.status(201);
                res.json(shoe);
            })
            .catch(function (err) {
                //if (err) return next(err);
                console.error(err)
            });
    };

    const filterBrand = function (req, res, next){
    
        ShoeSchema.methods.findSameBrand = function(callback){
            return this.model("ShoeModel").find({brand : this.brand}, callback);
        }
    };
    
    const filterColor= function (req, res, next){
        
        ShoeSchema.methods.findSameColor = function(callback){
            return this.model("ShoeModel").find({color : this.color}, callback);
        }
    };

    const filterSize = function (req, res, next){
        
        ShoeSchema.methods.findSameSize = function(callback){
            return this.model("ShoeModel").find({size : this.size}, callback);
        }
    
    };

    const remove = (req, res, next) => {
        // let resetButton = req.body.resetButton;

        ShoeModel.remove({}, function(err, removed){
        if (err) {
            console.error(err);
        } else {
            console.log('Data has been deleted!')
            res.redirect('/api/shoes');
            }
        });
    }

    return {
        shoeStock,
        newStock,
        filterBrand,
        filterColor,
        filterSize,
        remove
    }
};