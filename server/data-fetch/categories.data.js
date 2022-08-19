const axios = require('axios').default;

class CategoriesData {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.mercadolibre.com',
      timeout: 5000,
    });
  }

  async getCategoryData(id) {
    try {
      const url = `/categories/${id}`;
      const { data: categoryData } = await this.http.get(url);

      if (categoryData.length === 0) {
        throw new Error('No product found');
      }

      return categoryData;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CategoriesData;
