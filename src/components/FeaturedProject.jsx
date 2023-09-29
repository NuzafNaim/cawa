import Image from "next/image";
const FeaturedProject = () => {
  return <section className="bg-[#F0FDF4]">
    <div className="container mx-auto py-16 text-base">
      <div>
      <p className="uppercase text-brand font-medium mb-4">Featured Project</p>
      <p className="font-semibold text-3xl max-w-lg mb-12">We provide the Perfect Solution to your business growth</p>
      </div>
    <div className="grid grid-cols-2 items-start gap-8">
      <div>
        <Image src="/img/Mask.png" alt="" height={531} width={603}/>
        <p className="text-sm text-[#2E3E5C] mt-4 mb-2">App Design - June 20, 2022</p>
        <p className="font-bold text-2xl">Redesign channel website landng page</p>
      </div>
        <div className="grid grid-cols-2 gap-5">
        <div>
        <Image src="/img/Mask1.png" alt="" height={188} width={287}/>
        <p className="text-sm text-[#2E3E5C] mt-4 mb-2">App Design - June 20, 2022</p>
        <p className="font-bold text-lg">Redesign channel website landng page</p>
          </div>
          <div>
        <Image src="/img/Mask1.png" alt="" height={188} width={287}/>
        <p className="text-sm text-[#2E3E5C] mt-4 mb-2">App Design - June 20, 2022</p>
        <p className="font-bold text-lg">Redesign channel website landng page</p>
          </div>
          <div>
        <Image src="/img/Mask1.png" alt="" height={188} width={287}/>
        <p className="text-sm text-[#2E3E5C] mt-4 mb-2">App Design - June 20, 2022</p>
        <p className="font-bold text-lg">Redesign channel website landng page</p>
          </div>
          <div>
        <Image src="/img/Mask1.png" alt="" height={188} width={287}/>
        <p className="text-sm text-[#2E3E5C] mt-4 mb-2">App Design - June 20, 2022</p>
        <p className="font-bold text-lg">Redesign channel website landng page</p>
          </div>
      </div>
    </div>
    </div>
  </section>;
};
export default FeaturedProject;