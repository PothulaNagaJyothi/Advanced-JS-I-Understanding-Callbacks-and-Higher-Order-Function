function processProducts(products) {
  const productNames = products.map(product => product.name);

  products.forEach(product => {
    const message = (product.price > 50) 
      ? `${product.name} is above $50` 
      : `${product.name} is below $50`;
    
    console.log(message);
  });
}

const productsArray = [
  { name: "Laptop", price: 1000 }, 
  { name: "Mouse", price: 20 },
  { name: "Monitor", price: 250 },
  { name: "Keyboard", price: 45 }
];

processProducts(productsArray);