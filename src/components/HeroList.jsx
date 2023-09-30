import Image from "next/image";
import BrandList from "./BrandList";

const HeroList = () => {
  return <section className="bg-[#D7F5DC] -mt-32 pb-10 ">
    <div className="container mx-auto md:grid grid-cols-2 gap-24 items-center pt-44 pb-16">
      <div className="pb-10">
        <h2 className="text-2xl md:text-5xl font-bold text-black">Increase Your Customers Loyalty and Satisfaction</h2>
        <p className="text-xl	text-black mb-12">We help businesses like yours earn more customers, standout from competitors,  make more money</p>
        <button className="flex flex-row items-center gap-1 py-3 px-5 border-2 border-brand bg-brand rounded-lg text-lg text-white">Get Started</button>
      </div>
      <div>
        <div className='grid grid-cols-7 gap-4'>
          <div className="grid col-span-5"><Image className="w-full h-full object-cover rounded-lg" src="/img/hero/hero_1.png" alt="" width="408" height="271" /></div>
          <div className="grid col-span-2"><Image className="w-full h-full object-cover rounded-lg"  src="/img/hero/hero_2.png" alt="" width="180" height="271" /></div>
          <div className="grid col-span-3"><Image className="w-full h-full object-cover rounded-lg"  src="/img/hero/hero_3.png" alt="" width="246" height="164" /></div>
          <div className="grid col-span-4"><Image className="w-full h-full object-cover rounded-lg"  src="/img/hero/hero_4.png" alt="" width="345" height="164" /></div>
        </div>
      </div>
    </div>
    <BrandList/>
  </section>;
};
export default HeroList;