const ItemsData = require('../data-fetch/items.data');
const CurrenciesData = require('../data-fetch/currencies.data');
const toItemModel = require('../model/item.model');

class ItemsService {
  constructor() {
    this.items = [];
    this.itemsData = new ItemsData();
    this.currenciesData = new CurrenciesData();
    this.toItemModel = toItemModel;
  }

  async find(q, limit) {
    try {
      const itemsData = await this.itemsData.getItemsDataByQuery(q, limit);

      const itemsResults = itemsData.results;
      const categories = [];
      const items = [];

      itemsResults.forEach((itemResult) => {
        const item = toItemModel(itemResult);
        delete item.sold_quantity;
        delete item.description;
        items.push(item);

        itemsData.results;
        categories.push(itemResult.category_id);
      });

      return { categories, items };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id) {
    try {
      const itemData = await this.itemsData.getItemData(id);
      if (!itemData || Object.keys(itemData).length === 0) {
        throw new Error('Product not found');
      }
      const itemDescription = await this.itemsData.getItemDescription(id);

      const currencyData = await this.currenciesData.getCurrencyData(
        itemData.currency_id
      );

      const fullItemData = {
        ...itemData,
        ...itemDescription,
        decimal_places: currencyData.decimal_places,
      };

      const item = this.toItemModel(fullItemData);
      return { item: item };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ItemsService;
