import { useActionState, useState } from "react";
import { useFormContext } from "react-hook-form";

// type FormInfo = {
//  name: string,
//  email: string,
//  phone: string,
// }

const PersonalInfo = () => {
  const { register } = useFormContext()
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Personal info</h2>
      <p className="mb-4 font-light text-grey-dark">Please provide your name, email address, and phone number.</p>
        <label className="text-xs text-blue-dark">
          Name
          <input 
            {...register("name")}
            type="text"
            placeholder="e.g. Stephen King"
            className="block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-72"
          />
        </label>
        <label className="text-xs text-blue-dark">
          Email Address
          <input
            {...register("email")}
            type="email"
            name="emailAddress"
            placeholder="e.g. stephenking@lorem.com"
            className="block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-72"
          />
        </label>
        <label className="text-xs text-blue-dark">
          Phone Number
          <input
            {...register("phone")}
            type="tel"
            name="emailAddress"
            placeholder="e.g. +1 234 567 890"
            className="block h-10 p-4 mb-4 text-base border-2 rounded border-gray w-72"
          />
        </label>
    </>
  )
}

export { PersonalInfo };
