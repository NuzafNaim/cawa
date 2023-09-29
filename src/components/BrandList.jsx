import Image from "next/image";
import google from "../../public/img/brands/google.png"
import trello from "../../public/img/brands/trello.png"
import monday from "../../public/img/brands/monday.png"
import notion from "../../public/img/brands/notion.png"
import slack from "../../public/img/brands/slack.png"


const BrandList = () => {
    return <div className="bg-[#F8FFF9]">
        <div className="container mx-auto py-10">
            <div className="flex justify-between">
            <Image src={google} alt=""/>
            <Image src={trello} alt=""/>
            <Image src={monday} alt=""/>
            <Image src={notion} alt=""/>
            <Image src={slack} alt=""/>
            </div>
        </div>
  </div>;
};
export default BrandList;