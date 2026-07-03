import React from "react";
import Production from "@components/Product";

function ProductList({ data }) {
  const handleProductClick = (title) => {
    alert(`Product clicked: ${title}`); // 点击产品时弹出提示框 alert box pops up when product is clicked
  };

  const isReleased = new Date() <= new Date("2199-09-01");

  if (!isReleased) {
    return <div>Product not released yet. Please check back later.</div>;
  }
  if (data.length <= 0) {
    return <div>No products available.</div>;
  }
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        rowGap: "3rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            fontWeight: "800",
            backgroundImage: "url('src/assets/lines.png')",
            backgroundPosition: "center",
          }}
        >
          New arrivals. New possibilities.
        </h1>
      </div>
      {data.map((p) => (
        <Production {...p} key={p.title} onProductClick={handleProductClick} />
      ))}
    </div>
  );
}

export default ProductList;
