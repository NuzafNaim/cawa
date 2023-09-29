import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";

const TeamList = () => {
  return <section>
     <div className="container mx-auto py-16 text-base">
      <div>
      <p className="uppercase text-brand font-medium mb-4">Our Team Member</p>
      <p className="font-semibold text-3xl max-w-lg mb-12">Check our awesome team members</p>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
          <div className="relative">
            <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 text-gray-600 absolute top-[75%] left-[50%] translate-x-[-50%]"><FaFacebookF /> | <FaXTwitter /> | <FaInstagram /></div>
            <Image src="/img/team.png" alt="" height="387" width="392" />
            </div>
          <p className="font-semibold text-3xl pb-12">Devon Lane</p>
        </div>
        <div className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
          <div className="relative">
            <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 text-gray-600 absolute top-[75%] left-[50%] translate-x-[-50%]"><FaFacebookF /> | <FaXTwitter /> | <FaInstagram /></div>
            <Image src="/img/team.png" alt="" height="387" width="392" />
            </div>
          <p className="font-semibold text-3xl pb-12">Devon Lane</p>
        </div>
        <div className="flex flex-col items-center gap-7 border-2 rounded-[20px]">
          <div className="relative">
            <div className="bg-white flex items-center gap-2 rounded-full px-8 py-4 text-gray-600 absolute top-[75%] left-[50%] translate-x-[-50%]"><FaFacebookF /> | <FaXTwitter /> | <FaInstagram /></div>
            <Image src="/img/team.png" alt="" height="387" width="392" />
            </div>
          <p className="font-semibold text-3xl pb-12">Devon Lane</p>
        </div>
      </div>
    </div>
  </section>;
};
export default TeamList;