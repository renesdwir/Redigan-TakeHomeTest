import React, { useEffect, useState } from "react";
import bgOffering from "../assets/bg-offering.jpg";
import travellingHelmet from "../assets/travelling-helmet.png";
import cityHelmet from "../assets/city-helmet.png";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function ResultPage() {
  const { helmet } = useParams();
  const [data, setData] = useState({
    image: "",
    name: "",
  });
  const [coupon, setCoupon] = useState("");
  useEffect(() => {
    if (helmet === "city") {
      let name = "KYT Zelos";
      setData({
        image: cityHelmet,
        name: name,
      });
      setCoupon(`${name.split(" ").join("-")}-HELMETCO-${Date.now()}`);
    } else {
      let name = "AGV Pista";
      setData({
        image: travellingHelmet,
        name: name,
      });
      setCoupon(`${name.split(" ").join("-")}-HELMETCO-${Date.now()}`);
    }
  }, []);
  return (
    <div className="h-screen relative">
      <div>
        <img className="h-screen w-full object-cover" src={bgOffering} alt="" />
        <div className="w-full h-screen bg-slate-900 absolute top-0 opacity-30"></div>
      </div>
      <div className=" w-3/4 lg:gap-10 flex flex-col md:flex-row justify-between  absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className=" flex-1 mt-10 order-2 md:order-1">
          <h1 className="text-3xl  md:text-4xl font-bold  text-white italic">
            Your helmet are...
          </h1>
          <h1 className="italic text-6xl text-yellow-500 font-bold">
            {data.name}
          </h1>
          <div className="text-white mt-5 md:mt-14">
            <p className="text-xl font-semibold italic">
              Claim your{" "}
              <span className="font-extrabold text-yellow-500 border-b-2 border-yellow-500">
                20% discount
              </span>{" "}
              with this promo code !
            </p>
            <CopyToClipboard text={coupon}>
              <button
                onClick={() => {
                  alert("Coppied !");
                }}
                className="px-3 py-2 mt-5 bg-yellow-500 hover:bg-yellow-600  text-black font-semibold"
              >
                {coupon}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        <div className="mx-auto md:mt-10 xl:mt-0 md:mx-0 md:my-auto order-1 md:order-2">
          <img
            className="w-64 md:w-64 lg:w-72 xl:w-96"
            src={data.image}
            alt={data.name}
          />
        </div>
      </div>
    </div>
  );
}
