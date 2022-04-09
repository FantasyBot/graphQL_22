exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProducts = db.products.filter(
      (item) => item.categoryId === categoryId
    );
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => {
            let sumRating = 0;
            let numberOfReviews = 0;
            db.reviews.forEach((review) => {
              if (review.productId === product.id) {
                sumRating += review.rating;
                numberOfReviews++;
              }
            });
            const avgProductRating = sumRating / numberOfReviews;
            return avgProductRating >= avgRating;
          }
        );
      }
    }
    return filteredCategoryProducts;
  },
};
