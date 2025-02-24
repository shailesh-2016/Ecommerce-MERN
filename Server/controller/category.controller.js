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
