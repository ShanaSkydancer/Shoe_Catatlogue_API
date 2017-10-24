"use strict";

module.exports = (models) => {

    //All shoes
    const shoeStock = (req, res, next) => {
            models.ShoeModel.find({})
                .then((ShoeModel) => {
                    res.json(ShoeModel);
                })
        };

    //Add shoe
    const newStock = (req, res, next) => {
        var newShoe = new models.ShoeModel(req.body);

        newShoe.save().then((shoe) => {
            res.status(201);
            res.json(shoe);
            })
            .catch((err) => {
                if (err) return next(err);
                console.error(err)
            });
    };

    // Filters by brand
    // /api/shoes/brand/:brandname	
    const filterBrand = (req, res, next) => {
        const brandname = req.params.brandname;
        
            models.ShoeModel
                .find({ brand : brandname })
                .then((shoes) => {
                    res.json(shoes);
                })
    };
    
    // Filters by size
    // /api/shoes/size/:size	
    const filterSize = (req, res, next) => {
        const size = req.params.size;
        
        models.ShoeModel
            .find({ size : size })
            .then((shoes) => {
                res.json(shoes);
            })
        
    };
    
    // Filters by color
    // /api/shoes/color/:color
    const filterColor= (req, res, next) => {
        const color = req.params.color;
        
            models.ShoeModel
                .find({ color : color })
                .then((shoes) => {
                    res.json(shoes);
                })
    };

    // Filters by brand and size
    // /api/shoes/brand/:brandname/size/:size	
    const filterBrandAndSize = (req, res, next) => {
        const brand = req.param.brandname;
        const size = req.params.size;
        
            models.ShoeModel
                .find({ brand : brandname,
                        size : size
                })
                .then((shoes) => {
                    res.json(shoes);
                })
                .catch((err) => {
                    console.error(err)
                    return next(err);
                });
    };

    // /api/shoes/sold/:id	
    const soldStock = (req, res, next) => {
       const _id = req.params.id;

        models.ShoeModel
            .update(
                { _id : _id },
                { $inc : { in_stock : - 1 } })
            .then((result) => {
                res.json(result);
            })
    }

    return {
        shoeStock,
        newStock,
        filterBrand,
        filterColor,
        filterSize,
        filterBrandAndSize,
        soldStock
    }
};