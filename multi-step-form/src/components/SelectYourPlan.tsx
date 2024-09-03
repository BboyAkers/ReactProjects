import { PlanType } from "./PlanType"
import { useFormContext } from "react-hook-form";
const SelectYourPlan = () => {
  const { register, watch, setValue, formState: { errors } } = useFormContext();
  const isAnnualPricing = watch("isAnnualPricing");
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Select your plan</h2>
      <p className="mb-4 font-light text-grey-dark">You have the option of monthly or yearly billing.</p>
      {errors.planType && <p className="my-1 font-bold text-center text-red">Please select a plan</p>}
      <fieldset id="chose-plan-type" className="flex flex-col md:space-x-2 md:justify-between md:flex-row">
        <PlanType
          name="Arcade"
          icon="/icon-arcade.svg"
          title="Arcade"
          price={9}
        />
        <PlanType
          name="Advanced"
          icon="/icon-advanced.svg"
          title="Advanced"
          price={12}
        />
        <PlanType
          name="Pro"
          icon="/icon-pro.svg"
          title="Pro"
          price={15}
        />
      </fieldset>
      <div className="flex items-center justify-center py-4 rounded-lg bg-grey-light">
          <span className="text-sm" id="annual-billing-label">
            <span className="font-medium text-grey-dark">Monthly</span>
          </span>
          <button 
            {...register("isAnnualPricing")}
            type="button"
            className={`relative inline-flex flex-shrink-0 h-6 mx-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer bg-blue-dark w-11 focus:outline-none focus:ring-2 focus:ring-blue-dark focus:ring-offset-3`}
            role="switch"
            value={isAnnualPricing}
            onClick={() => {
              setValue("isAnnualPricing", !isAnnualPricing);
            }}
            aria-checked="false"
            aria-labelledby="annual-billing-label">
            <span aria-hidden="true" className={`inline-block w-5 h-5 transition duration-200 ease-in-out transform ${isAnnualPricing == false || isAnnualPricing == "false" ? 'translate-x-0' : 'translate-x-5'} bg-white rounded-full shadow pointer-events-none ring-0`}></span>
          </button>
          <span className="text-sm" id="annual-billing-label">
            <span className="font-medium text-grey-dark">Yearly</span>
          </span>
        </div>
    </>
  )
}

export { SelectYourPlan }
