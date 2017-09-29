'use strict';

module.exports = function (models) {

//Use debugger with node-inspector
//Used it at the beginning of my code but it can go anywhere or I can create a break in the inspector
// debugger;

    const home = (req, res, next) => {
        res.render("index");
    };


    return {
        home
    }
};