"use strict";

module.exports = function (models){

    //All shoes
    const shoeStock = function (req, res, next){
            models.ShoeModel.find({})
                .then(function (ShoeModel){
                    res.json(ShoeModel);
                })
        };

    //Add shoe
    const newStock = function (req, res, next){
        var newShoe = new models.ShoeModel(req.body);

        newShoe.save().then(function (shoe) {
            res.status(201);
            res.json(shoe);
            })
            // .catch(function (err) {
                //if (err) return next(err);
            //     console.error(err)
            // });
    };

    // /api/shoes/brand/:brandname	
    const filterBrand = (req, res, next) => {
        const brandname = req.params.brandname;
        
            models.ShoeModel
                .find({ brand : brandname })
                .then(function (shoes) {
                    res.json(shoes);
                })
    };
    
    // /api/shoes/size/:size	
    const filterSize = (req, res, next) => {
        const size = req.params.size;
        
        models.ShoeModel
        .find({ size : size })
        .then(function (shoes) {
            res.json(shoes);
        })
        
    };
    
    // /api/shoes/color/:color
    const filterColor= (req, res, next) => {
        const color = req.params.color;
        
            models.ShoeModel
                .find({ color : color })
                .then(function (shoes) {
                    res.json(shoes);
                })
    };

    // /api/shoes/brand/:brandname/size/:size	
    const filterBrandAndSize = (req, res, next) => {
        const size = req.params.size;
        
            models.ShoeModel
                .find({ brand : brandname,
                        size : size
                })
                .then(function (shoes) {
                    res.json(shoes);
                })
    }

    // /api/shoes/sold/:id	
    const soldStock = (req, res, next) => {
       const shoes = req.body;

        shoes.forEach((shoe) => {
            models.ShoeModel
                .update(
                    { _id : shoe._id },
                    { $inc : { in_stock : - shoe.qty } })
                .then(function (result) {
                    res.json(result);
                })
        });
    }

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
        filterBrandAndSize,
        soldStock,
        remove
    }
};