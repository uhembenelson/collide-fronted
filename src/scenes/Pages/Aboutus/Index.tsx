import Footer from "@/scenes/footer";
import AB from "@/assets/abbg.png";
import Boys from "@/assets/boys.png";
import School from "@/assets/School.png";
import V from "@/assets/three.png";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const Index = () => {
  return (
    <>
    <Helmet>
    

      <title>Our Mission</title>
      <meta name="description" content="Through Education & Innovation, we are
connecting the dots of technology in Africa, one
enthusiast at a time."></meta>
      <link rel="canonical" href="/about-us"/>

      <title>Our Impact</title>
      <meta name="description" content="Since August 2023, we've triumphantly
nurtured the inaugural student cohort of our
summer school. Our vision extends further
— by 2028, we aim to empower one million
Nigerian citizens with essential tech skills."></meta>
      <link rel="canonical" href="/about-us"/>


      <title>Our Core Values</title>
      <meta name="description" content="We epitomize Transformation through constant
Evolutionand collaboration, centering our focus onCommunity.Our Humane approach stems from
the belief in universal opportunities for success.
While driven by Youth, we welcome individuals of all
ages to partake and flourish within our vibrant community.
We are T.E.C.H.Y."></meta>

      <link rel="canonical" href="/about-us"/>
      <title>About us</title>
      <meta name="description" content="Kindling a transformative spark in technology, resonating from Africa to the entire world"></meta>
      <link rel="canonical" href="/about-us"/>
    </Helmet>
    
      <div className="bg-black">
        <div
          className="flex h-screen w-screen  items-center justify-center bg-black bg-cover"
          style={{ backgroundImage: `url(${AB})` }}
        >
          {/* <img src={AB} className="w-full h-full"/> */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <>
              <div className="flex-col px-4">
                <h1 className="text-left text-[20px] font-semibold md:text-[40px]">
                  Vision{" "}
                </h1>
                <div className="h-[4px]  w-[200px] bg-gradient-to-r from-from to-to md:h-[7px] md:w-[402px]"></div>
                <div className="mt-5 text-[30px] font-semibold md:text-[79px]">
                  Kindling a transformative{" "}
                  <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                    spark{" "}
                  </span>
                  in <br />{" "}
                  <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                    technology,
                  </span>{" "}
                  resonating from{" "}
                  <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                    Africa
                  </span>
                  <br /> to the entire world.
                </div>
              </div>
            </>
          </motion.div>
        </div>

        <div className="gap-[60px]  bg-bg2 px-5 md:flex md:items-center md:justify-between md:px-[100px]">
          <div className="mb-20 mt-5 w-full md:mt-20">
            <img src={Boys} className="md:w-[100%] " />
          </div>
          <div className="w-full flex-col">
            <h1 className="text-left text-[20px] font-semibold md:text-[40px]">
              Mission{" "}
            </h1>
            <div className="mt-3  h-[4px] w-[200px] bg-gradient-to-r from-from to-to md:mt-7 md:h-[7px] md:w-[402px]"></div>

            <div className="mt-3 text-[18px] md:mt-5 md:text-[24px] ">
              Through{" "}
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                Education{" "}
              </span>{" "}
              &
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                {" "}
                Innovation,
              </span>{" "}
              we are <br />
              connecting the dots of technology in Africa, one <br />
              enthusiast at a time.
            </div>
          </div>
        </div>

        <div className="gap-[60px]  bg-bg3 px-5 md:flex md:items-center md:justify-between md:px-[100px]">
          <div className="flex w-full flex-col items-center">
            <div className="mt-10">
              <h1 className="text-left text-[20px] font-semibold md:text-[40px]">
                Impact{" "}
              </h1>
              <div className="mt-3  h-[4px] w-[200px] bg-gradient-to-r from-from to-to md:mt-7 md:h-[7px] md:w-[402px]"></div>

              <div className="mt-3 text-[18px] md:mt-5 md:text-[24px] ">
                Since August 2023, we've triumphantly
                <br />
                nurtured the inaugural student cohort of our
                <br /> summer school. Our vision extends further
                <br />— by 2028, we aim to empower one{" "}
                <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                  million
                </span>
                <br /> Nigerian citizens with essential tech skills.
              </div>
            </div>
          </div>

          <div className="mb-20 mt-5 w-full md:mt-20">
            <img src={School} className="md:w-[100%] " />
          </div>
        </div>
        <div className="gap-[60px]  bg-bg2 px-5 md:flex md:items-center md:justify-between md:px-[100px]">
          <div className="mb-20 mt-5 w-full md:mt-20">
            <img src={V} className="md:w-[100%] " />
          </div>
          <div className="w-full flex-col">
            <h6 className="text-left text-[20px] font-semibold md:text-[40px]">
              Core Values{" "}
            </h6>
            <div className="mt-3  h-[4px] w-[200px] bg-gradient-to-r from-from to-to md:mt-7 md:h-[7px] md:w-[402px]"></div>

            <div className="mt-3 text-[18px] md:mt-5 md:text-[24px] ">
              We epitomize{" "}
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                Transformation{" "}
              </span>
              through constant
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                <br />
                Evolution
              </span>
              and collaboration, centering our focus on
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                Community.
              </span>
              Our{" "}
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                Humane
              </span>{" "}
              approach stems from
              <br /> the belief in universal opportunities for success.
              <br />
              While driven by{" "}
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                Youth,
              </span>{" "}
              we welcome individuals of all
              <br /> ages to partake and flourish within our vibrant community.
              <br />
              We are{" "}
              <span className="bg-gradient-to-r from-from to-to bg-clip-text text-transparent">
                T.E.C.H.Y.
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;




