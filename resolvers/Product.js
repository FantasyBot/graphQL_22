exports.Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    return categories.find((item) => item.id === parent.categoryId);
  },
};
