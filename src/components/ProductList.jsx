"use client";

import { useSelector } from "react-redux";
import { useMemo } from "react";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function ProductList() {
  const { category, maxPrice } = useSelector(
    (state) => state.filter
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" ||
        product.category === category;

      const priceMatch =
        product.price <= maxPrice;

      return categoryMatch && priceMatch;
    });
  }, [category, maxPrice]);

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}