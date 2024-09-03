import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

const FinishUp = () => {
  const { getValues } = useFormContext();
  const { isAnnualPricing, planType, addOns } = getValues();
  const parsedPlanType = planType.split(',')
  const parsedAddOns: string[][] = []
  if(addOns) {
    addOns.forEach((addOn: string) => {
      parsedAddOns.push(addOn.split(','));
    })
  }
  
  const calculateTotalCost = () => {
    let total = 0
    if(Boolean(isAnnualPricing)) {
      total = Number(parsedPlanType[1]) * 10
      parsedAddOns.forEach((addOn) => {
        total += Number(addOn[1]) * 10
      })
    } else {
      total = Number(parsedPlanType[1])
      parsedAddOns.forEach((addOn) => {
        total += Number(addOn[1])
      })
    }
    return total
  }
  
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold text-blue-dark">Finish up</h2>
      <p className="mb-4 font-light text-grey-dark">Double-check everything looks OK before confirming.</p>
      <div className="p-4 mb-2 text-sm bg-grey-light">
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-blue-dark">{parsedPlanType[0]} ({isAnnualPricing == true || isAnnualPricing == "true" ? 'Annual' : 'Monthly'})</p>
            <Link to="/plan" className="underline text-grey-dark">Change</Link>
          </div>
          <span className="font-bold">${isAnnualPricing == true || isAnnualPricing == "true" ? `${Number(parsedPlanType[1]) * 10}/yr` : `${parsedPlanType[1]}/mo`}</span>
        </div>
        {addOns ? (
          <>
            <hr className="my-3" />
            {parsedAddOns.map((addOn) => (<p key={addOn[0]} className="flex justify-between pb-2 text-grey-dark">{addOn[0]} <span className="text-blue-dark">+${isAnnualPricing == true || isAnnualPricing == "true" ? `${Number(addOn[1]) * 10}/yr` : `${addOn[1]}/mo`}</span></p>))}
          </>
        ): ''}
      </div>
      <p className="flex justify-between px-2 py-3 text-sm text-grey-dark">Total (per month) <span className="text-base font-bold text-purple">+${calculateTotalCost()}/mo</span></p>
    </>
  )
}

export { FinishUp }
