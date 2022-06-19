const Categories = require('../models/Categories');
const { GoodSchemaModel } = require('../models/Good');
const GoodsSchemaModel = require('../models/Goods');
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
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).json('Failed to add Category');
    }
  }

  async addGood(req, res) {
    // add good to goods and to goodArray
    try {
      if (!req.body) {
        return res.status(400).json({ message: 'Nothing was added to the list' });
      }
      const { category, images, title, characteristics, description, articul, price } = req.body;

      let goodsDoc = await GoodsSchemaModel.findOne({ category: category }).exec();

      const Good = await new GoodSchemaModel({
        category: category,
        title: title,
        characteristics: characteristics,
        description: description,
        articul: articul,
        price: price,
      });
      Good.save();

      if (!goodsDoc) {
        const goodArray = await new GoodsSchemaModel({
          category: category,
          goods: [Good],
        });

        // check if model exists in DB => if exists push new good to goods of goodArray
        goodArray.save();
      } else {
        goodsDoc.goods.push(Good);
        goodsDoc.save();
      }
      return res.status(200).json(title);
    } catch (error) {
      console.log(error);
      res.status(400).json('Failed to add Good');
    }
  }

  async addSortedGoodsArray(req, res) {
    try {
      const { goods, category } = req.body;
      console.log(goods, 'sortedGoods', category, 'category');
      GoodsSchemaModel.findOneAndReplace(
        { category: category },
        { category: category, goods: goods },
        {},
        function (err, result) {
          if (err) {
            res.send(err);
          } else {
            console.log(result, 'result in addSortedGoodsArray');
            return res.status(200).json(result);
          }
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
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
