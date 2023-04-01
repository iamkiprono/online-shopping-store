import React, { useEffect, useState } from "react";
import Card from "./Card";
import Spinner from "../Components/Spinner";

const Products = () => {
  const [phones, setPhones] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const phones = await fetch("https://fakestoreapi.com/products/");
      const data = await phones.json();
      console.dir(data);

      setPhones(data);
    };
    getProducts();
  }, []);
  console.log(phones)

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
                image={phone.image}
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
