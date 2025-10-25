"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{
        padding: "0.5rem",
        width: "100%",
        maxWidth: "400px",
        border: "1px solid #ccc",
        borderRadius: "4px"
      }}
    />
  );
}
