import React from "react";
import FooterNav from "../components/shared/FooterNav";
import Greetings from "../components/home/Greetings";
import MiniCards from "../components/home/MiniCards";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../components/home/RecentOrders";
import PopularDishes from "../components/home/PopularDishes";

const Home = () => {
  return (
    <section className="grid grid-cols-12  md:gap-2 px-10 mt-3 h-full">
      <div className="lg:col-span-7 md:col-span-8 col-span-12 ">
        <Greetings />
        <div className="rounded-md flex items-center w-full gap-7 mt-4 justify-between ">
          <MiniCards
            title="Total Earnings"
            icon={<BsCashCoin />}
            number={512}
            footerNum={1.62}
          />
          <MiniCards
            title="In Progress"
            icon={<GrInProgress />}
            number={16}
            footerNum={3.6}
          />
        </div>
        <div className="rounded-md ">
          <RecentOrders />
        </div>
      </div>
      <div className="lg:col-span-5 md:col-span5 col-span-12 bg-[#0B0B0B] rounded-xl py-7 ">
        <PopularDishes />
        </div>

      <FooterNav />
    </section>
  );
};

export default Home;
