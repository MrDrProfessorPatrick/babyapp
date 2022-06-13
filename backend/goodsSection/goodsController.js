const Categories = require('../models/Categories');

class goodsController {
  async addCategory(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({ message: 'Nothing was added to list' });
      }
      const { categoryReq, categoryModelId } = req.body;
      console.log(categoryReq, 'categoryReq');

      // const Category = await new Categories({
      //   categoryModelId: 'categoryModelId',
      //   categories: categoryReq,
      // });
      // Category.save();

      Categories.findOneAndReplace(
        { categoryModelId: 'categoryModelId' },
        { categoryModelId: 'categoryModelId', categories: categoryReq },
        {},
        function (err, result) {
          if (err) {
            res.send(err);
          } else {
            console.log(result, 'result in findOneAndReplace');
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).json('Failed to add Category');
    }
  }

  async getCategoriesList(req, res) {
    try {
      const categoriesList = await Categories.find();
      console.log(categoriesList, 'categoriesList');
      return res.status(200).json(categoriesList);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new goodsController();
