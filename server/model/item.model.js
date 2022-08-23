function toItemModel({
  id,
  condition,
  currency_id,
  decimal_places,
  plain_text,
  price,
  seller_address,
  shipping,
  sold_quantity,
  thumbnail,
  title,
}) {
  return {
    id,
    title,
    price: {
      currency: currency_id,
      ammount: price,
      decimals: decimal_places || 2,
    },
    picture: thumbnail,
    condition,
    free_shipping: shipping.free_shipping,
    sold_quantity: sold_quantity || 0,
    description: plain_text || '',
    state: seller_address.state.name || '',
  };
}
module.exports = toItemModel;
