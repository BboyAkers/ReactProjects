import { useFormContext } from "react-hook-form";

const PersonalInfoForm = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold md:text-3xl">Personal info</h2>
      <p className="mb-4 font-light text-grey-dark">Please provide your name, email address, and phone number.</p>
      <div>
        <label className="w-full text-xs text-blue-dark">
          <span className="flex justify-between">
            <span>Name &#42;</span>
            {errors.name && <span className="font-bold text-red">This field is required</span>}
          </span>
          <input 
            {...register("name", { required: true })}
            type="text"
            placeholder="e.g. Stephen King"
            className={`block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-full focus:outline-none ${errors.name ? "focus:border-red focus:ring-red" : "focus:border-purple focus:ring-purple"}`}
          />
        </label>
        <label className="w-full text-xs text-blue-dark">
          <span className="flex justify-between">
            <span>Email Address &#42;</span>
            {errors.email && <span className="font-bold text-red">This field is required</span>}
          </span>
          <input
            {...register("email", { required: true})}
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className={`block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-full focus:outline-none ${errors.email ? "focus:border-red focus:ring-red" : "focus:border-purple focus:ring-purple"}`}
          />
        </label>
        <label className="w-full text-xs text-blue-dark">
          Phone Number
          <input
            {...register("phone")}
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className="block w-full h-10 p-4 mb-4 text-base border-2 rounded border-gray focus:outline-none focus:border-purple focus:ring-purple invalid:border-red focus:invalid:border-red"
          />
        </label>
        </div>
    </>
  )
}

export { PersonalInfoForm };
