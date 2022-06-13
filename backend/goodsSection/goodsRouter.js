const Router = require('express');
const router = new Router();
const controller = require('./goodsController');

router.post('/addgoodsection', controller.addCategory); // TODO maybe need to add middlware to check admin rights
router.get('/getcategorieslist', controller.getCategoriesList);
module.exports = router;
