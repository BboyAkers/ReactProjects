import { useState } from "react"
import { PlanType } from "./PlanType"

const SelectYourPlan = () => {
  const [isAnnualPricing, setIsAnnualPricing] = useState(false)
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold">Select your plan</h2>
      <p className="mb-4 font-light text-grey-dark">You have the option of monthly or yearly billing.</p>
      
      <PlanType
        icon="/icon-arcade.svg"
        title="Arcade"
        price={9}
        groupName="plan-type"
        isAnnualPricing={isAnnualPricing}
      />
      <PlanType
        icon="/icon-advanced.svg"
        title="Advanced"
        price={12}
        groupName="plan-type"
        isAnnualPricing={isAnnualPricing}
      />
      <PlanType
        icon="/icon-pro.svg"
        title="Pro"
        price={15}
        groupName="plan-type"
        isAnnualPricing={isAnnualPricing}
      />
      <button type="button" onClick={() => setIsAnnualPricing(!isAnnualPricing)}>
        Monthly/Annual
      </button>
    </>
  )
}

export { SelectYourPlan }
