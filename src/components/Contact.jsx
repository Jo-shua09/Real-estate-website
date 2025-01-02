import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0bb73df9-431a-484d-a0d8-f613181ea80e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        contact <span className="underline underline-offset-4 decoration-1 under font-light"> with us</span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8 normal-case">Ready to Make a Move? Let’s Build Your Future Together</p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className=" flex  flex-wrap justify-between gap-y-6">
          <div className="w-full md:w-1/2 text-left">
            your name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:border-black"
              type="text"
              name="Name"
              placeholder="your name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            your email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:border-black"
              type="email"
              name="Email"
              placeholder="your email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:border-black h-48 resize-none"
            name="Message"
            placeholder="message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded capitalize"> {result ? result : "Send message"}</button>
      </form>
    </div>
  );
};

export default Contact;
