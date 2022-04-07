exports.Category = {
  products: (parent, args, context) => {
    const { products } = context;
    return products.filter((item) => item.categoryId === parent.id);
  },
};
