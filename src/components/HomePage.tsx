import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import type { Data } from "../services/types";
import imgHomeBg from "../../public/backgroundHome.jpg";
import img1 from "../../public/dataImg1.jpg";
import img2 from "../../public/dataImg2.jpg";
import img3 from "../../public/dataImg3.jpg";
import img4 from "../../public/dataImg4.jpg";

const imgs = [img1, img2, img3, img4];

const HomePage = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const fetchData = async () => {
    try {
      const data = await authService.getData();
      const normalize = JSON.stringify(data);
      setData(JSON.parse(normalize));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="relative h-screen w-full  bg-cover "
        style={{ backgroundImage: `url(${imgHomeBg})` }}
      >
        <div className="absolute h-full w-full top-0 left-0 bg-[#172234]/60 z-20" />
        <div className="flex flex-col items-center justify-center h-full p-10 gap-8 ">
          <p className="font-[Merriweather] font-bold text-white text-6xl md:text-7xl z-50 text-center ">
            The chemical negatively charged
          </p>
          <p className="max-w-2xl text-2xl text-white z-50 text-center">
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is{" "}
          </p>
          <Link to={"/sign-up"} className="z-50">
            <button className="w-40 h-13  bg-transparent rounded-md border border-white font-[Merriweather] text-[20px] hover:bg-white/10 cursor-pointer z-50 duration-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="h-full w-full bg-white font-[Merriweather] px-[40px] md:px-[80px] pb-[12px]">
        <h1 className="text-[#B29F7E] text-[28px] pt-[50px] mb-[20px]">
          Open Deals
        </h1>
        <div className="flex flex-col  md:grid md:grid-cols-2 gap-4">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`h-[300px] md:h-[400px] bg-center bg-cover`}
              style={{ backgroundImage: `url(${imgs[index]})` }}
            >
              <div className="h-full flex flex-col justify-end  text-white font-bold text-[18px] ml-[14px] pb-[20px]">
                <h2 className="text-[20px]">{item.title}</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2  lg:gap-x-4 font-['Lato'] text-[18px] ">
                  <span>{item.dhs}Dhs</span>
                  <span>Tiket - {item.tiket}</span>
                  <span>Yield:{item.yield}</span>
                  <span>Days left: {item.days}</span>
                  <span>Sold: {item.sold}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
