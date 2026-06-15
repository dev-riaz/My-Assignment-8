"use client";
import toast from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";

const OrderForm = () => {
  const submitHandle = (e) => {
    e.preventDefault();
    toast.success("Order Confirmed Successfully!");
    e.target.reset();
  };

  return (
    <div className="">
      <h1 className="text-[#0c4532] text-2xl font-bold"> Book this Animal</h1>
      <div className="">
        <form onSubmit={submitHandle} className="fieldset p-4">
          <div className="md:flex justify-between items-center gap-2">
            <div className="w-full">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input validator"
                  placeholder="Enter Your Full name"
                  required
                />
                <p className="validator-hint hidden">Required</p>
              </fieldset>

              <label className="fieldset">
                <span className="label">Email</span>
                <input
                  type="email"
                  className="input validator"
                  placeholder="Enter Your Email"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="fieldset">
                <span className="label">Phone</span>
                <input
                  type="text"
                  className="input validator"
                  placeholder="Enter Your phone Number"
                  required
                />
                <span className="validator-hint hidden">Required</span>
              </label>
              <label className="fieldset">
                <span className="label">District</span>
                <input
                  type="text"
                  className="input validator"
                  placeholder="Enter your District Name"
                  required
                />
                <span className="validator-hint hidden">Required</span>
              </label>
            </div>
          </div>
          <div className="">
            <textarea
              placeholder="Enter your Location Details"
              className="border border-gray-300 w-full"
            ></textarea>
          </div>
          <button
            className="btn bg-[#0c4532] text-white rounded-2xl"
            type="submit"
          >
            Confirm Booking
            <FaArrowRightLong />
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
