const CurrenciesData = require('../data-fetch/currencies.data');

class CurrenciesService {
  constructor() {
    this.currenciesData = new CurrenciesData();
  }

  async findOne(id) {
    try {
      const currencyData = await this.currenciesData.getCurrencyData(id);
      if (!currencyData) {
        throw new Error('Product not found');
      }
      return currencyData;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CurrenciesService;
