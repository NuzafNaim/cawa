import Image from "next/image";

const AllProject = () => {
  return <section className="container mx-auto py-16 text-base">
  <div>
  <p className="uppercase text-brand font-medium mb-4">Our All Project</p>
  <p className="font-semibold text-3xl max-w-lg mb-12">Better Agency/SEO Solution At Your Fingertips</p>
  </div>
  <div className="md:grid grid-cols-2 gap-8">
    <div className="shadow-lg rounded-[20px] p-7">
          <Image src="/img/project.png" alt="" height="472" width="544" />
          <p className="font-semibold text-2xl pt-6 uppercase">Lorem ipsum dolor sit consectutar</p>
    </div>
    <div className="shadow-lg rounded-[20px] p-7">
          <Image src="/img/project.png" alt="" height="472" width="544" />
          <p className="font-semibold text-2xl pt-6 uppercase">Lorem ipsum dolor sit consectutar</p>
    </div> 
    <div className="shadow-lg rounded-[20px] p-7">
          <Image src="/img/project.png" alt="" height="472" width="544" />
          <p className="font-semibold text-2xl pt-6 uppercase">Lorem ipsum dolor sit consectutar</p>
    </div>
    <div className="shadow-lg rounded-[20px] p-7">
          <Image src="/img/project.png" alt="" height="472" width="544" />
          <p className="font-semibold text-2xl pt-6 uppercase">Lorem ipsum dolor sit consectutar</p>
    </div>
    <div className="shadow-lg rounded-[20px] p-7">
          <Image src="/img/project.png" alt="" height="472" width="544" />
          <p className="font-semibold text-2xl pt-6 uppercase">Lorem ipsum dolor sit consectutar</p>
    </div>
    <div className="shadow-lg rounded-[20px] p-7">
          <Image src="/img/project.png" alt="" height="472" width="544" />
          <p className="font-semibold text-2xl pt-6 uppercase">Lorem ipsum dolor sit consectutar</p>
    </div>
   
  </div>
</section>;
};
export default AllProject;