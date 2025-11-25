function processCategories(categories) {
  const countObj = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  console.log("Count Object:", countObj);

  const sortedCategories = Object.entries(countObj)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  console.log("Sorted Categories:", sortedCategories);
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

processCategories(categories);
