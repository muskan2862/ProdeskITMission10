"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setMaxPrice,
  resetFilters,
} from "../redux/features/filterSlice";

export default function FilterSidebar() {
  const dispatch = useDispatch();

  const { category, maxPrice } = useSelector(
    (state) => state.filter
  );

  return (
    <div className="sidebar">
      <h2>Filters</h2>

      <label>Category</label>

      <select
        value={category}
        onChange={(e) =>
          dispatch(
            setCategory(e.target.value)
          )
        }
      >
        <option value="All">All</option>

        <option value="Electronics">
          Electronics
        </option>

        <option value="Fashion">
          Fashion
        </option>

        <option value="Books">
          Books
        </option>
      </select>

      <label>
        Maximum Price: ₹{maxPrice}
      </label>

      <input
        type="range"
        min="0"
        max="1000"
        step="50"
        value={maxPrice}
        onChange={(e) =>
          dispatch(
            setMaxPrice(
              Number(e.target.value)
            )
          )
        }
      />

      <button
        onClick={() =>
          dispatch(resetFilters())
        }
      >
        Reset Filters
      </button>
    </div>
  );
}