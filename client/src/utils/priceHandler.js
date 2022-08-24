function itemPriceHandler(itemPrice) {
  const nullPrice = {
    amount: { integer: '--', decimals: '' },
    currency: '',
    decimals: 0,
  };

  if (!itemPrice || !itemPrice.amount) {
    return nullPrice;
  }

  const priceArray = itemPrice.amount.toString().split('.');

  const priceInteger =
    priceArray[0] === '----'
      ? '----'
      : parseInt(priceArray[0], 10).toLocaleString('es-AR', {
          maximumFractionDigits: 2,
        });

  let priceDecimals = priceArray[1] ? priceArray[1] : [];
  if (priceDecimals && priceDecimals.length === 1) {
    priceDecimals += 0;
  }

  const priceCurrency = itemPrice.currency === 'ARS' ? '$' : itemPrice.currency;

  const fixedPrice = {
    amount: { integer: priceInteger, decimals: priceDecimals },
    currency: priceCurrency,
    decimals: itemPrice.decimals,
  };

  return fixedPrice;
}

export default itemPriceHandler;
