import { useFormContext } from "react-hook-form";

type PlanTypeRadioCard = { 
  name: string;
  icon: string;
  title: string;
  price: number;
  isAnnualPricing: boolean;
  groupName: string;
}

const PlanType = ({ name, icon, title, price, isAnnualPricing, groupName }: PlanTypeRadioCard ) => {
  const { register, setValue } = useFormContext();
  return (
    <div>
      <input {...register("planType")} key={name} id={name} type="radio" name={groupName} value={name} className="hidden peer" /> 
      <label 
        htmlFor={name}
        aria-label={name}
        className="flex p-4 my-4 bg-white border rounded-lg cursor-pointer border-grey peer-checked:border-purple peer-checked:text-purple peer-checked:bg-grey-light"
        onClick={() => {
          setValue("planType", name)
        }}
      >
      <span className="flex flex-1">
        <img src={icon} alt="svg arcade icon" aria-hidden="true" />
        <span className="flex flex-col pl-4">
          <span className="block font-medium text-blue-dark">{title}</span>
          <span className="flex items-center mt-1 text-sm text-grey-dark">{isAnnualPricing ? `$${price * 10}/yr` : `$${price}/mo`}</span>
          { isAnnualPricing && <span className="mt-2 text-xs text-blue-dark">2 months free</span>}
        </span>
      </span>
      <span className="absolute border-2 rounded-lg pointer-events-none -inset-px" aria-hidden="true"></span>
    </label>
  </div>
  );
}

export { PlanType }
