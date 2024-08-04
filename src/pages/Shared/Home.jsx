import BlurIn from "@/components/magicui/blur-in";
import React from "react";
import WordRotate from "@/components/magicui/word-rotate";
import FlippingCard from "@/components/Shared/FlippingCards";
const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="h-96 w-11/12 border-2 rounded-2xl mt-20 flex justify-center items-center flex-row border-primary ">
          <div className="flex justify-start items-center w-2/6 ">
            <img
              src="https://ik.imagekit.io/VishalGanesh/Homeimage/pexels-cesar-galeao-1673528-3289711.jpg?updatedAt=1721985824592"
              className="h-96 rounded-2xl"
            />
          </div>
          <div className="flex justify-center items-center w-full mb-64 h-1/6">
          
            <BlurIn word="BLAZE TO VICTORY!!!" className="w-full ml-44 " />
          </div>
          {/* <div>

<img src="https://ik.imagekit.io/VishalGanesh/Homeimage/Gym%20dp.jpeg?updatedAt=1721988337553" className="scale-50 "/>
</div> */}
        </div>
        
        <div>

<WordRotate
  className="text-4xl font-bold text-black dark:text-white "
  words={["STRIVE FOR ","PROGRESS","NOT","PERFECTION"]}
/>
  </div>
        <div className="flex justify-center items-center mt-20 flex-col w-full">
          <div className="w-full h-20  flex justify-center items-center font-bold text-5xl mb-10">
            PACKAGES
          </div>
          <div className="flex flex-row">
            <FlippingCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
