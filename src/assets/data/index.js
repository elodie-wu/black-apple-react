import ipad_pro_image from "~img/store-card-ipad-pro.jpeg";
import { IPHONE_16_PRO } from "./products";

export const product = {
  title: "MacBook Pro 16-inch",
  detail: "Powerful performance. Incredible battery life. From RMB 19,999.",
  image: ipad_pro_image,
  textColor: "white",
};

export const product2 = {
  title: "Apple Watch Ultra 2",
  detail: "Adventure awaits. From RMB 6,499.",
  image: "http://152.136.182.210:12231/images/home/store-card-watch-ultra.jpeg",
  textColor: "white",
  soldOut: false,
};

export const NEW_ARRIVALS_LIST = [
  product,
  {
    title: "Enjoy Apple Music free for 3 months.",
    detail: "Included with eligible Apple devices.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-applemusic.jpeg",
    textColor: "black",
    soldOut: false,
  },
  product2,
  {
    title: "Mac mini",
    detail: "Smaller size. Bigger power. From RMB 4,499.",
    image: "http://152.136.182.210:12231/images/home/store-card-mac-mini.jpeg",
    textColor: "black",
    soldOut: true,
  },
  {
    title: "MacBook Pro",
    detail: "Supercharged by M4. From RMB 12,999.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-macbook-pro.jpeg",
    textColor: "white",
    soldOut: false,
  },
  {
    title: "Apple Vision Pro",
    detail:
      "Welcome to the era of spatial computing. From RMB 1,250/month (24-month installment at 0% APR) or From RMB 29,999.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-vision-pro.jpeg",
    textColor: "black",
    soldOut: false,
  },
  {
    title: "New Year Essentials",
    detail:
      "From RMB 333/month (24-month installment at 0% APR) or From RMB 7,999.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-cny-quick-picks.jpeg",
    textColor: "black",
    soldOut: false,
  },
  {
    title: "Watch the latest films. Learn a few new tricks.",
    detail: "Shot on iPhone.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-cny-engraving.jpeg",
    textColor: "black",
    soldOut: false,
  },
];

export const NEW_ARRIVALS_LIST_2 = [];

export const OFFER_LIST = [
  {
    type: "Limited-Time New Year Offer",
    title: "Start the Year with Great Savings",
    detail:
      "From January 4–7, save up to RMB 800 on eligible products with qualifying payment methods. Trade in your current iPhone for additional credit.",
    image: "http://152.136.182.210:12231/images/home/store-card-cny-offer.jpeg",
    soldOut: false,
  },
  {
    type: "Limited-Time New Year Offer",
    title: "iPhone",
    detail:
      "Save up to RMB 500 on eligible iPhone models with qualifying payment methods. Plus, enjoy trade-in credit.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-cny-iphone16-pro-offer.jpeg",
    soldOut: false,
  },
  {
    type: "Limited-Time New Year Offer",
    title: "iPad",
    detail:
      "Save up to RMB 400 on eligible iPad models with qualifying payment methods.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-cny-ipad-offer.jpeg",
    soldOut: true,
  },
  {
    type: "Limited-Time New Year Offer",
    title: "Apple Watch",
    detail:
      "Save up to RMB 300 on eligible Apple Watch models with qualifying payment methods.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-cny-watch-s10-offer.jpeg",
    soldOut: false,
  },
  {
    type: "Limited-Time New Year Offer",
    title: "AirPods",
    detail:
      "Save up to RMB 300 on eligible AirPods with qualifying payment methods.",
    image:
      "http://152.136.182.210:12231/images/home/store-card-cny-airpods-pro-offer.jpeg",
    soldOut: false,
  },
  {
    type: "Limited-Time New Year Offer",
    title: "iMac",
    detail:
      "Save up to RMB 300 on eligible Mac products with qualifying payment methods.",
    image: "http://152.136.182.210:12231/images/home/store-card-cny-imac.jpeg",
    soldOut: false,
  },
];

export const SUGGESTED_PROUDCT = {
  imageSrc: "http://152.136.182.210:12231/images/home/collection.png",
  product: IPHONE_16_PRO,
};
