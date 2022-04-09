exports.Product = {
  category: (parent, args, { db }) => {
    return db.categories.find((item) => item.id === parent.categoryId);
  },
  reviews: (parent, args, { db }) => {
    return db.reviews.filter((item) => item.productId === parent.id);
  },
};
