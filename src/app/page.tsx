"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ShopItem from "../components/ShopItem";
import itemsData from "../data/items.json";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredItems = itemsData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Latinoland Shop</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <div style={{ marginTop: "1rem" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ShopItem key={item.name} {...item} />)
        ) : (
          <p>No se encontraron items.</p>
        )}
      </div>
    </main>
  );
}
