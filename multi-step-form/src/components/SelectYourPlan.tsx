import { useState } from "react"
import { PlanType } from "./PlanType"
import { useFormContext } from "react-hook-form";
// https://claritydev.net/blog/build-a-multistep-form-with-react-hook-form
const SelectYourPlan = () => {
  const { register, setValue, formState: { errors } } = useFormContext();
  const [isAnnualPricing, setIsAnnualPricing] = useState(false)
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Select your plan</h2>
      <p className="mb-4 font-light text-grey-dark">You have the option of monthly or yearly billing.</p>
      {errors.planType && <p className="my-1 font-bold text-center text-red">Please select a plan</p>}
      <fieldset id="chose-plan-type">
        <PlanType
          name="Arcade"
          icon="/icon-arcade.svg"
          title="Arcade"
          price={9}
          isAnnualPricing={isAnnualPricing}
        />
        <PlanType
          name="Advanced"
          icon="/icon-advanced.svg"
          title="Advanced"
          price={12}
          isAnnualPricing={isAnnualPricing}
        />
        <PlanType
          name="Pro"
          icon="/icon-pro.svg"
          title="Pro"
          price={15}
          isAnnualPricing={isAnnualPricing}
        />
      </fieldset>
      <div className="text-center">
        <label className="px-4 py-2 m-auto text-white rounded-full bg-blue-dark">
        <input
          {...register("isAnnualPricing")}
          type="button"
          value={String(isAnnualPricing)}
          onClick={() =>{
            setIsAnnualPricing(!isAnnualPricing)
            setValue('isAnnualPricing', !isAnnualPricing)
          }}
          className="hidden"
        />
          Switch to {isAnnualPricing ? 'Monthly': 'Annual'}
        </label>
      </div>
    </>
  )
}

export { SelectYourPlan }
