const getPromotionPrice = (price, promotionValue) => {
  const promotionPrice = (price * promotionValue) / 100;
  return promotionPrice;
};

export default getPromotionPrice;
