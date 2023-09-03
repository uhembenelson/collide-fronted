import Logo from "@/assets/Logo.png";
import Tw from "@/assets/t.png";
import In from "@/assets/i.png";
import Fb from "@/assets/f.png";
import Ig from "@/assets/i.png";


const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="md:w-[150px] w-[100px]"/>
          <p className="my-5 md:text-[12] text-[12px]">
          Collide.africa is a tech institute committed to training software developers, by software developers across Africa.
          </p>
          <div className="flex gap-5 mb-5">
            <img src={Tw} className="w-[30.5px] h-[30px]"></img>
            <img src={In} className="w-[30.5px] h-[30px]"></img>
            <img src={Fb} className="w-[30.5px] h-[30px]"></img>
            <img src={Ig} className="w-[30.5px] h-[30px]"></img>
          </div>
          <p className="text-[12px]">© Collide.africa All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          {/* <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">About Us</p>
          <p>Contact Us</p> */}
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> N0: 237, JOS SOUTH SHOPPING COMPLEX ABATTOIR. JOS PLATEAU</p>
          <p>08106119178</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
