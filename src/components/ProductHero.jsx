import SkuSelect from "./SkuSelect";
import { useState } from "react";
import { produce } from "immer";

function ProductHero({ product, imageUrl }) {
  const [cartItem, setCartItem] = useState({
    productId: product.id,
    imageUrl: product.image,
    model: null,
    color: null,
    memorySize: null,
  });
  return (
    <div
      className="flex flex-col lg:flex-row-reverse
        pt-8 mt-4 
        md:pt-28 lg:pt-52
        space-y-4
        text-apple-text-light dark:text-apple-text-dark
    "
    >
      <div className="flex-1 flex justify-center items-center">
        <img src={imageUrl} className="w-[350px] lg:-mt-32 lg:ml-19" />
      </div>
      <div className="flex-1 space-y-6 ml-6 md:ml-24">
        <div className="text-4xl font-black md:text-6xl">
          Buy {product.name}
        </div>
        <div className="font-medium md:text-xl">
          RMB {Number(product.startingPrice).toLocaleString("en-US")}
        </div>
        <div className="flex space-x-3">
          <SkuSelect
            placeholder={"Model"}
            options={product.models.map((model) => model.name)}
            onChange={(value) => {
              setCartItem(
                produce(cartItem, (draft) => {
                  draft.model = value;
                }),
              );
            }}
            value={cartItem.model}
          />
          <SkuSelect
            placeholder={"Color"}
            options={product.colors}
            onChange={(value) => {
              setCartItem(
                produce(cartItem, (draft) => {
                  draft.color = value;
                }),
              );
            }}
            value={cartItem.color}
          />
          <SkuSelect
            placeholder={"Storage Capacity"}
            options={product.memorySizes.map((size) => size.name)}
            onChange={(value) => {
              setCartItem(
                produce(cartItem, (draft) => {
                  draft.memorySize = value;
                }),
              );
            }}
            value={cartItem.memorySize}
          />
          <button
            className="
            border border-apple-blue
            px-5 py-2 bg-transparent
            rounded-md
            hover:bg-apple-blue
            hover:text-apple-gray-100
          "
            onClick={() => {
              alert(
                "Add to Cart:" +
                  cartItem.model +
                  cartItem.color +
                  cartItem.memorySize,
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
