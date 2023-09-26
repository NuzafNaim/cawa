import { BsArrowRight } from 'react-icons/bs';


const WorkList = () => {
  return <div>
    <div className="container mx-auto my-16 text-base">
      <div>
        <p className="uppercase text-brand font-medium mb-4">Work List</p>
        <p className="font-semibold text-3xl max-w-lg mb-6">We provide the Perfect Solution to your business growth</p>
      </div>
      {/* TOP WORKLIST */}
      <div className='flex gap-11'>
        <div className="group">
          <div className='px-6 py-20 hover:shadow-lg group-hover:rounded-4xl'>
            <div className='mb-3'>
              <div className=""><img src="/img/icons/Activity.png" alt="" /></div>
            </div>
            <div>
              <p className="font-semibold text-2xl mb-5">Grow Your Business</p>
              <p className="text-lg mb-10">We help identify the best ways to improve your business</p>
            </div>
            <button className='flex items-center gap-3 group-hover:bg-sec px-6 py-3 rounded-lg group-hover:text-white'>Learn More <BsArrowRight/></button>
          </div>
        </div>
        <div className="group">
          <div className='px-6 py-20 hover:shadow-lg group-hover:rounded-4xl'>
            <div className='mb-3'>
              <div className=""><img src="/img/icons/Heart.png" alt="" /></div>
            </div>
            <div>
              <p className="font-semibold text-2xl mb-5">Improve brand loyalty</p>
              <p className="text-lg mb-10">We help identify the best ways to improve your business</p>
            </div>
            <button className='flex items-center gap-3 group-hover:bg-sec px-6 py-3 rounded-lg group-hover:text-white'>Learn More <BsArrowRight/></button>
          </div>
        </div>
        <div className="group">
          <div className='px-6 py-20 hover:shadow-lg group-hover:rounded-4xl'>
            <div className='mb-3'>
              <div className=""><img src="/img/icons/Work.png" alt="" /></div>
            </div>
            <div>
              <p className="font-semibold text-2xl mb-5">Improve Business Model</p>
              <p className="text-lg mb-10">We help identify the best ways to improve your business</p>
            </div>
            <button className='flex items-center gap-3 group-hover:bg-sec px-6 py-3 rounded-lg group-hover:text-white'>Learn More <BsArrowRight/></button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
export default WorkList;