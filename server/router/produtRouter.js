const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Product = require('../model/product.js'); // should export a mongoose from  model



//create a record 
router.post('/product',

  
  /** 
   * notEmpty is a validation rule that ensures the "name" field is not empty.
   * w ithmessage If the validation fails (i.e., the name is missing or empty), 
   * this sets the custom error message "name is required" that will be returned in the response.*/
  [
    body('name').notEmpty().withMessage('name is required'),
    body('image').notEmpty().withMessage('image is required'),
    body('price').notEmpty().withMessage('price is required'),
    body('qty').notEmpty().withMessage('qty is required'),
    body('info').notEmpty().withMessage('info is required')
  ],
  async (req, res) => {

    //validationResult(req):Its job is to check if any validation errors occurred in the request (req).
    const errors = validationResult(req);

    //error.isEmpty == true hoga toh us case me koi validation error ni ayega ..
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
      //mongoose make document
      const product = new Product({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qty: req.body.qty,
        info: req.body.info
      });

      // save/inert in database 
      const savedProduct = await product.save();   

      res.status(200).json({
        message: 'Data has been successfully inserted',
        product: savedProduct 
      });
    } 
    catch(error) {
      console.log(error);
      res.status(500).json({ error: [{ message: error.message }] });
    }
  }
);


// get all record

router.get('/product',async(req,res)=>
{
  try
  {
    //Product is name of collection in database
    let all_product=await Product.find()

      res.status(200).json({
      
        products: all_product
      });

  }
 catch (error) {
      console.log(error);
      res.status(500).json({ error: [{ message: error.message }] });
    }

})


//get single record

router.get('/product/:product_id',async(req,res)=>
{
  let productId=req.params.product_id
  try
  {
    let product=await Product.findById(productId)
      res.status(200).json({
        product: product
      });

  }
 catch (error) {
      console.log(error);
      res.status(500).json({ error: [{ message: error.message }] });
    }

})

//update items

router.put('/product/:product_id',async(req,res)=>{
  let productId = req.params.product_id;
  try{
    let update_product = await Product.findById(productId);
    if(!update_product){
     return res.status(400).json({ error: [{ message: "no product found" }] });
    }
    let product = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qty: req.body.qty,
        info: req.body.info
    }
    product = await Product.findByIdAndUpdate(productId ,{
      $set :product
    })
    res.status(200).json({msg:"product has been updated",
      product:product
  })

  }
  catch(error){
    // console.log(error);
      res.status(500).json({ error: [{ message: error.message }] });
  }
})


//delete single product

router.delete('/product/:product_id',async(req,res)=>
{
  let productId=req.params.product_id
  try
  {
    let product=await Product.findById(productId)
    if(!product)
    {
      return res.status(400).json({error: [{ message: "no product found" }] });

    }
     await Product.findByIdAndDelete(productId)
      res.status(200).json({
      
        msg:"product has been deleted"
      });

  }
 catch (error) {
      console.log(error);
      res.status(500).json({ error: [{ message: error.message }] });
    }

})

module.exports = router;
