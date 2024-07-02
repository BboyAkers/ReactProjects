import { useState } from "react";

const PlanType = ({ icon, title, price, isAnnualPricing, groupName }: { icon: string, title: string, price: number, isAnnualPricing: boolean, groupName: string}) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <label aria-label="Arcade" className="relative flex p-4 my-4 bg-white border rounded-lg cursor-pointer active:border-purple">
    <input type="radio" name={groupName} value="Arcade" className="sr-only" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    <span className="flex flex-1">
      <img src={icon} alt="svg arcade icon" aria-hidden="true" />
      <span className="flex flex-col pl-4">
        <span className="block font-medium text-blue-dark">{title}</span>
        <span className="flex items-center mt-1 text-sm text-grey-dark">{isAnnualPricing ? `$${price * 10}/yr` : `$${price}/mo`}</span>
        { isAnnualPricing && <span className="mt-2 text-xs text-blue-dark">2 months free</span>}
      </span>
    </span>
    {/* <!--
      Active: "border", Not Active: "border-2"
      
      Checked: "border-indigo-600", Not Checked: "border-transparent"
    --> */}
    <span className="absolute border-2 rounded-lg pointer-events-none -inset-px" aria-hidden="true"></span>
  </label>
  );
}

export { PlanType}
