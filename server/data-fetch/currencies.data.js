const axios = require('axios').default;

class CurrenciesData {
  constructor() {
    this.http = axios.create({
      baseURL: 'https://api.mercadolibre.com',
      timeout: 5000,
    });
  }

  async getCurrencyData(id) {
    try {
      const url = `/currencies/${id}`;
      const { data: currencyData } = await this.http.get(url);

      if (currencyData.length === 0) {
        throw new Error('No product found');
      }

      return currencyData;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CurrenciesData;
