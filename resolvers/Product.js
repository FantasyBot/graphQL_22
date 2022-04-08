exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    return categories.find((item) => item.id === parent.categoryId);
  },
  reviews: (parent, args, context) => {
    const { reviews } = context;
    return reviews.filter((item) => item.productId === parent.id);
  },
};
