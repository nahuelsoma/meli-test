function toItemModel({
  id,
  title,
  price,
  currency_id,
  decimal_places,
  condition,
  thumbnail,
  shipping,
  sold_quantity,
  plain_text,
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
    sold_quantity: sold_quantity || null,
    description: plain_text || null,
  };
}
module.exports = toItemModel;
