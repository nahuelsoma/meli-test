const CategoriesData = require('../data-fetch/categories.data');

class CategoriesService {
  constructor() {
    this.categoriesData = new CategoriesData();
  }

  async findOne(id) {
    try {
      const categoryData = await this.categoriesData.getCategoryData(id);
      if (!categoryData.length === 0) {
        throw new Error('Product not found');
      }
      return categoryData;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CategoriesService;
