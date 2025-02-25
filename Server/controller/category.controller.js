const { Category } = require("../models/category.model");

exports.store = async (req, res) => {
  try {
    const { cat_name } = req.body;
    const existCategory = await Category.findOne({ cat_name });

    if (existCategory) {
      res.status(400).json({
        message: "Category already exists",
      });
    } else {
      const category = await Category.create({ cat_name });
      if (category) {
        res.json({
          success: true,
          message: "Category added",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.index = async (req, res) => {
  try {
    const category =await Category.find();
    if (category.length > 0) {
      res.json({
        success: true,
        category,
      });
    } else {
      res.json({
        success: true,
        message: "category records not found",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.trash=async(req,res)=>{
  try {
    const{id}=req.params
    const existCategory=await Category.findByIdAndDelete(id)
    if(existCategory){
      res.json({
        status:true,
        message:"category deleted"
      })
    }else{
      res.json({
        status:false,
        message:"category not found"
      })
    }
  } catch (error) {
    console.log('error: ', error);
    
  }
}
