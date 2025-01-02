import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className=" pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="footer">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between pb-4">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" className="" />
          <p className="mt-4 text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">company</h3>
          <div className="flex flex-col gap-y-2">
            <a href="#header" className=" hover:text-white text-gray-400">
              home
            </a>
            <a href="#about" className=" hover:text-white text-gray-400">
              about us
            </a>
            <a href="#contact" className=" hover:text-white text-gray-400">
              contact us
            </a>
            <a href="#" className=" hover:text-white text-gray-400">
              privacy policy
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="mt-4 text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className="mt-5 w-full flex flex-row gap-x-3">
            <input
              type="text"
              placeholder="enter your email"
              className="border
             rounded bg-gray-800 pl-2 text-gray-400 border-gray-700 focus:outline-none md:w-auto w-full font-semibold text-sm h-12 "
            />
            <button className="text-sm text-white bg-blue-500 px-6 font-semibold h-12 rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-700  pt-6 text-gray-400 text-sm text-center mb-3">Cloned by tuma.dev. All Right Reserved.</div>
    </div>
  );
};

export default Footer;
