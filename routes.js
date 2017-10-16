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

    // Filters by brand
    // /api/shoes/brand/:brandname	
    const filterBrand = (req, res, next) => {
        const brandname = req.params.brandname;
        
            models.ShoeModel
                .find({ brand : brandname })
                .then(function (shoes) {
                    res.json(shoes);
                })
    };
    
    // Filters by size
    // /api/shoes/size/:size	
    const filterSize = (req, res, next) => {
        const size = req.params.size;
        
        models.ShoeModel
        .find({ size : size })
        .then(function (shoes) {
            res.json(shoes);
        })
        
    };
    
    // Filters by color
    // /api/shoes/color/:color
    const filterColor= (req, res, next) => {
        const color = req.params.color;
        
            models.ShoeModel
                .find({ color : color })
                .then(function (shoes) {
                    res.json(shoes);
                })
    };

    // Filters by brand and size
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
       const _id = req.params.id;

        models.ShoeModel
            .update(
                { _id : _id },
                { $inc : { in_stock : - 1 } })
            .then(function (result) {
                res.json(result);
            })
    }

    //Remove shoe
    // const remove = (req, res, next) => {
    //     const currentShoe = e.target.value;        

    //     ShoeModel.remove({
    //         currentShoe
    //     }, function(err, removed){
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log('Data has been deleted!')
    //         // res.redirect('/api/shoes');
    //         }
    //     });
    // }

    return {
        shoeStock,
        newStock,
        filterBrand,
        filterColor,
        filterSize,
        filterBrandAndSize,
        soldStock
        // remove
    }
};