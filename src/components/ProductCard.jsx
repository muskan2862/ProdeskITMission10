"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";
import { useCallback } from "react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, [dispatch, product]);

  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}