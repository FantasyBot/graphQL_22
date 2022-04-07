exports.Query = {
  products: (parent, args, { products }) => products,
  product: (parent, args, { products }) => {
    return products.find((item) => item.id === args.id);
  },
  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) => {
    return categories.find((item) => item.id === args.id);
  },
};
