import { useForm } from "react-hook-form";
const AddRegistration = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className=" py-5 pb-10 w-full">
        <h2 className="text-3xl text-center py-5 font-semibold ">
          Add Registration
        </h2>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" rounded-md w-full p-5 mx-auto"
          >
            <div className="grid grid-cols-12 gap-5 justify-items-center text-black">
              <div className="lg:col-span-6 col-span-12 w-full">
                <label className="block mb-2 text-[#FFFFFF]" htmlFor="method">
                  Method
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-red-400   outline-blue-300"
                  type="text"
                  id="method"
                  {...register("method", { required: true })}
                />
              </div>
              <div className="lg:col-span-6 col-span-12 w-full">
                <label className="block mb-2 text-[#FFFFFF]" htmlFor="pay">
                  Payment Number
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300"
                  type="number"
                  id="pay"
                  {...register("pay", { required: true })}
                />
              </div>
              <div className="lg:col-span-6 col-span-12 w-full">
                <label className="block mb-2 text-[#FFFFFF]" htmlFor="amount">
                  Amount
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300"
                  type="text"
                  id="amount"
                  {...register("amount", { required: true })}
                />
              </div>
              <div className="lg:col-span-6 col-span-12 w-full">
                <label className="block mb-2 text-[#FFFFFF]" htmlFor="trx">
                  Transition Id
                </label>
                <input
                  className="w-full px-4 py-2 rounded-lg border border-red-400 outline-blue-300"
                  type="text"
                  id="trx"
                  {...register("trx", { required: true })}
                />
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-l from-[#19c3fc] to-slate-800 rounded-lg py-2 font-semibold mt-10"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRegistration;
