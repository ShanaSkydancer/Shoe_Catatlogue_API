// 'use strict';

// const express = require('express');
// const router = express.Router();

// //GET request
// router.get("/", function(req, res){
//     res.json({
//         response: "You sent a GET request"
//     });
// });

// //POST request
// router.post("/", function(req, res){
//     res.json({
//         response: "You sent a POST request",
//         body: req.body
//     });
// });

// //GET request for brand/:brandname
// router.get("/brand/:brandname", function(req, res){
//     res.json({
//         response: "You sent a GET request for brand " + req.params.brandname
//     });
// });

// //GET request for /size/:size
// router.get("/size/:size", function(req, res){
//     res.json({
//         response: "You sent a GET request for brand " + req.params.size
//     });
// });

// //GET request for /brand/:brandname/size/:size
// router.get("/brand/:brandname/size/:size", function(req, res){
//     res.json({
//         response: "You sent a GET request for brand " + req.params.brandname + "and size " + req.params.size
//     });
// });

// //PUT request
// //Edit a shoe brand
// router.put("/brand/:brandname", function(req, res){
//     res.json({
//         response: "You sent a PUT request for brand",
//         brandID: req.params.brand,
//         body: req.body
//     });
// });

// //PUT request
// //Edit a shoe size
// router.put("/size/:size", function(req, res){
//     res.json({
//         response: "You sent a PUT request for size",
//         sizeID: req.params.size,
//         body: req.body
//     });
// });

// //PUT request
// //Edit a shoe color
// router.put("/color/:color", function(req, res){
//     res.json({
//         response: "You sent a PUT request for color",
//         colorID: req.params.color,
//         body: req.body
//     });
// });

// //PUT request
// //Edit a shoe price
// router.put("/price/:price", function(req, res){
//     res.json({
//         response: "You sent a PUT request for price",
//         priceID: req.params.price,
//         body: req.body
//     });
// });

// //PUT request
// //Edit a shoe stock
// router.put("/stock/:stock", function(req, res){
//     res.json({
//         response: "You sent a PUT request for stock",
//         stockID: req.params.stock,
//         body: req.body
//     });
// });

// router.delete("/brand/:brandname", function(req, res){
//     res.json({
//         response: "You sent a DELETE request for brand",
//         brandID: req.params.brand,
//         body: req.body
//     });
// });

// router.post("/size/:size", function(req, res){
//     res.json({
//         response: "You sent a POST request for size",
//         sizeID: req.params.size,
//     });
// })

// module.exports = router;