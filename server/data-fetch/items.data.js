const axios = require('axios').default;

class ItemsData {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.mercadolibre.com',
      timeout: 5000,
    });
  }

  async getItemsDataByQuery(q, limit = 4) {
    try {
      const site = 'MLA';
      const url = `/sites/${site}/search`;
      const { data: itemsData } = await this.http.get(url, {
        params: { q, limit },
      });

      if (itemsData.results.length === 0) {
        throw new Error('No product found');
      }

      return itemsData;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getItemData(id) {
    try {
      const url = `/items/${id}`;
      const { data: itemData } = await this.http.get(url);

      if (!itemData) {
        throw new Error('No product found');
      }

      return itemData;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getItemDescription(id) {
    try {
      const url = `/items/${id}/description`;
      const { data: itemDescription } = await this.http.get(url);
      return itemDescription;
    } catch (error) {
      if (
        error.response.data.message ===
        `Description of item with id ${id} not found`
      ) {
        return {
          plain_text: '---',
        };
      }
      throw new Error(error);
    }
  }
}

module.exports = ItemsData;
