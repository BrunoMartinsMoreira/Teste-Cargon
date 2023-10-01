import { useState } from "react";

import Navigation from "../components/Navigation/Nav";
import Products from "../components/Products/Products";
import products from "../data.json";
import Recommended from "../components/Recommended/Recommended";
import Sidebar from "../components/Sidebar/Sidebar";
import Card from "../components/Card/Card";
import "./index.css";

function ProductsView() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ seller, available_sizes, name, price, type }) =>
          seller === selected ||
          available_sizes.includes(selected) ||
          price <= selected ||
          name === selected ||
          type === selected
      );
    }

    return filteredProducts.map((product, index) => (
      <Card key={index} product={product} />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} selectedValue={selectedCategory} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default ProductsView;
