"use client";

import ProductList from "../components/ProductList";
import FilterSidebar from "../components/FilterSidebar";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="container">
      <h1>Sprint 10 - Redux Toolkit Store</h1>

      <ThemeToggle />

      <div className="layout">
        <FilterSidebar />
        <ProductList />
      </div>
    </main>
  );
}