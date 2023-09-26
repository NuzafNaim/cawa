import { FiChevronDown } from 'react-icons/fi';

const SiteNavBar = () => {
  return <header className="container mx-auto mt-4 py-4 text-black"><div className="flex justify-between items-center space-b">
    <div className="p-3">
      <p className="font-bold text-xl">Design<span className="text-sec">AGENCY</span></p>
    </div>
    <nav className='font-medium'>
      <ul className="flex flex-row items-center gap-6">
        <li className='text-lg'>Home</li>
        <li className='text-lg'>Team</li>
        <li className='text-lg'>Service</li>
        <li className='text-lg'>Projects</li>
        <li className='text-lg'>Testimonials</li>
        <li><button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand rounded-lg text-lg">Login<FiChevronDown /></button></li>
        <li><button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand bg-brand rounded-lg text-lg text-white">Register</button></li>
      </ul>
    </nav>
  </div></header>;
};
export default SiteNavBar;