import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "../Components/Spinner";

const Products = () => {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const phones = await fetch("https://dummyjson.com/products");
      const data = await phones.json();

      setPhones(data.products);
    };
    getProducts();
  }, []);

  return (
    <div className="product-page">
      <h2>Products</h2>
      <div className="products">
        {!phones ? (
          <Spinner />
        ) : (
          phones &&
          phones.map((phone) => {
            return (
              <Card
                key={phone.id}
                image={phone.images[0]}
                title={phone.title}
                price={phone.price}
                description={phone.description}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
