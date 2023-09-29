import BrandList from "./BrandList";

const HeroList = () => {
  return <section className="bg-[#D7F5DC] -mt-32 pb-10 ">
    <div className="container mx-auto grid grid-cols-2 gap-24 items-center pt-44 pb-16">
      <div>
        <h2 className="text-5xl font-bold text-black">Increase Your Customers Loyalty and Satisfaction</h2>
        <p className="text-xl	text-black mb-12">We help businesses like yours earn more customers, standout from competitors,  make more money</p>
        <button className="flex flex-row items-center gap-1 py-3 px-5 border-2 border-brand bg-brand rounded-lg text-lg text-white">Get Started</button>
      </div>
      <div>
        <div className='grid grid-cols-7 grid-rows-5 gap-3'>
          <div className="grid col-span-5 row-span-3"><img className="w-full h-full object-cover rounded-lg" src="/img/hero/hero_1.png" alt="" /></div>
          <div className="grid col-span-2 row-span-3"><img className="w-full h-full object-cover rounded-lg"  src="/img/hero/hero_2.png" alt="" /></div>
          <div className="grid col-span-3 row-span-2"><img className="w-full h-full object-cover rounded-lg"  src="/img/hero/hero_3.png" alt="" /></div>
          <div className="grid col-span-4 row-span-2"><img className="w-full h-full object-cover rounded-lg"  src="/img/hero/hero_4.png" alt="" /></div>
        </div>
      </div>
    </div>
    <BrandList/>
  </section>;
};
export default HeroList;