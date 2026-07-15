import hero_small_image from "~img/hero_small.jpg";
import hero_image from "~img/hero.jpg";
import Button from "./Button";

const ImageHero = () => {
  return (
    <div className="relative bg-black text-white mb-2">
      {/*图片区域 */}
      <img
        src={hero_small_image}
        className="w-full h-[480px] object-cover block md:hidden"
      />
      <img
        src={hero_image}
        className="w-full h-[480px] object-cover hidden md:block"
      />
      {/* 文案+按钮区域 */}
      <div className="absolute inset-4 flex flex-col p-2 items-center justify-end text-center md:justify-start">
        <div className="text-4xl md:text-6xl font-bold">iPhone 14 Pro</div>
        <div className="mt-4 flex space-x-4">
          <Button title="Learn More" variant="primary" />

          <Button title="Buy" variant="outline" />
          {/* <button className="px-6 py-2 border border-blue-600 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
          <button className="px-6 py-2 border border-blue-600 bg-transparent text-white rounded-md hover:bg-blue-700 transition">
            Buy
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
