const ItemsData = require('../data-fetch/items.data');
const CurrenciesData = require('../data-fetch/currencies.data');
const CategoriesData = require('../data-fetch/categories.data');
const toItemModel = require('../model/item.model');
const mode = require('../utils/mode');

class ItemsService {
  constructor() {
    this.items = [];
    this.itemsData = new ItemsData();
    this.categoriesData = new CategoriesData();
    this.currenciesData = new CurrenciesData();
    this.toItemModel = toItemModel;
  }

  async find(q, limit) {
    try {
      const itemsData = await this.itemsData.getItemsDataByQuery(q, limit);

      const itemsResults = itemsData.results;
      const items = [];
      const itemsCategoriesIds = [];

      itemsResults.forEach((itemResult) => {
        const item = toItemModel(itemResult);
        delete item.sold_quantity;
        delete item.description;
        delete item.category;
        items.push(item);
        itemsCategoriesIds.push(itemResult.category_id);
      });

      const modeItemsCategoryId = mode(itemsCategoriesIds);
      const categoryData = await this.categoriesData.getCategoryData(
        modeItemsCategoryId
      );
      const categories = categoryData.path_from_root.map(
        (category) => category.name
      );

      return { categories, items };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id) {
    try {
      const itemData = await this.itemsData.getItemData(id);

      if (!itemData || Object.keys(itemData).length === 0) {
        throw new Error('No product found');
      }
      const itemDescription = await this.itemsData.getItemDescription(id);

      const currencyData = await this.currenciesData.getCurrencyData(
        itemData.currency_id
      );

      const categoryData = await this.categoriesData.getCategoryData(
        itemData.category_id
      );
      const categories = categoryData.path_from_root.map(
        (category) => category.name
      );

      const fullItemData = {
        ...itemData,
        ...itemDescription,
        decimal_places: currencyData.decimal_places,
      };

      const item = this.toItemModel(fullItemData);

      return { item, categories };
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ItemsService;
