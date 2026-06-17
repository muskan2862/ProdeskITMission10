"use client";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { products } from "../data/products";

export default function useProducts() {
  const { category, minPrice, maxPrice } =
    useSelector((state) => state.filter);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        category === "All" ||
        product.category === category;

      const priceMatch =
        product.price >= minPrice &&
        product.price <= maxPrice;

      return categoryMatch && priceMatch;
    });
  }, [category, minPrice, maxPrice]);

  return filteredProducts;
}