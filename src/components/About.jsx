import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ ease: "easeOut", duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About <span className="underline underline-offset-4 decoration-1 under font-light">our brand</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 normal-case">Passionate About Properties, Dedicated to Your Vision</p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 ">
            <div className="">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of excellence</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>projects completed</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. sq. ft. delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>ongoing projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id esse ipsam, ipsa obcaecati rem expedita explicabo optio delectus vitae
            deserunt molestias blanditiis similique consequatur praesentium?
          </p>

          <a href="/" className="text-sm font-semibold py-3 px-8 text-white bg-blue-600 rounded ">
            learn more
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
