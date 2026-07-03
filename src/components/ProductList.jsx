import React from "react";
import Production from "@components/Product";

const ReleaseNote = () => (
  <div>
    <h2>Please wait</h2>
    <h1>New product release date: January 1, 2199</h1>
  </div>
);
const ProductNotFound = () => (
  <div>
    <h1>Product not released</h1>
    <h2>Please wait</h2>
  </div>
);
const ListTitle = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <h1
      style={{
        fontWeight: "800",
        backgroundPosition: "center",
        backgroundImage: "url('src/assets/lines.png')",
      }}
    >
      New arrivals. New possibilities.
    </h1>
  </div>
);
function ProductList({ data }) {
  const handleProductClick = (title) => {
    alert(`Product clicked: ${title}`); // 点击产品时弹出提示框 alert box pops up when product is clicked
  };

  const isReleased = new Date() <= new Date("2199-01-01");

  if (!isReleased) {
    return <ReleaseNote />;
  }
  if (data.length <= 0) {
    return <ProductNotFound />;
  }
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        rowGap: "3rem",
      }}
    >
      <ListTitle />
      {data.map((p) => (
        <Production {...p} key={p.title} onProductClick={handleProductClick} />
      ))}
    </div>
  );
}

export default ProductList;
