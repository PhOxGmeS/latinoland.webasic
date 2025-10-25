"use client";

interface ShopItemProps {
  name: string;
  type: string;
  description: string;
  price: number;
  command: string;
}

export default function ShopItem({ name, type, description, price, command }: ShopItemProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "6px",
        marginBottom: "1rem"
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Precio:</strong> {price}</p>
      <code>{command}</code>
    </div>
  );
}
