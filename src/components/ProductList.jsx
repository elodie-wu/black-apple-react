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
const ListTitle = ({ title }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <h1
      style={{
        fontWeight: "800",
        backgroundPosition: "center",
        backgroundImage: "url('src/assets/lines.png')",
      }}
    >
      {title || "new arrival"}
    </h1>
  </div>
);

function ProductList({ title, datalength, children }) {
  const isReleased = new Date() <= new Date("2199-01-01");

  if (!isReleased) {
    return <ReleaseNote />;
  }
  if (datalength <= 0) {
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
      <ListTitle title={title} />
      {children}
    </div>
  );
}

export default ProductList;
