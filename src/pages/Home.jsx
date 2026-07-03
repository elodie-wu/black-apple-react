import { NEW_ARRIVALS_LIST, OFFER_LIST } from "../assets/data";
import ProductList from "@components/ProductList";
import NewArrival from "@components/NewArrival";
import Offer from "@components/Offer";

import withSoldOut from "../HOCs/withSoldOut";

import withBanner from "../HOCs/withBanner";

const NewArrivalWithSoldOutCheck = withSoldOut((props) => {
  const { title } = props;
  return <NewArrival {...props} title={"商品:" + title} />;
});

const NewArrivalWithBannerAndSoldOut = withBanner(
  NewArrivalWithSoldOutCheck,
  "Product sold out",
);

const OfferWithSoldOutCheck = withSoldOut(Offer);

function Home() {
  return (
    <div>
      <ProductList title="New Arrivals" datalength={NEW_ARRIVALS_LIST.length} />
      {NEW_ARRIVALS_LIST.map((p) => (
        <NewArrivalWithBannerAndSoldOut {...p} key={p.title} scale={1.05} />
      ))}
      <ProductList title="Discounts" datalength={OFFER_LIST.length} />
      {OFFER_LIST.map((p) => (
        <OfferWithSoldOutCheck {...p} key={p.title} />
      ))}
    </div>
  );
}

export default Home;
