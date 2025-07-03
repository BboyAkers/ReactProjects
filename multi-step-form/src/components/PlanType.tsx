import { useFormContext } from "react-hook-form";

type PlanTypeRadioCard = { 
  name: string;
  icon: string;
  title: string;
  price: number;
}

const PlanType = ({ name, icon, title, price }: PlanTypeRadioCard ) => {
  const { register, watch } = useFormContext();
  const isAnnualPricing = watch("isAnnualPricing");
  
  return (
    <>
      <div>
        <input {...register("planType", { required: true })} key={name} id={name} type="radio" value={[name, String(price)]} className="hidden peer" /> 
        <label 
          htmlFor={name}
          aria-label={name}
          tabIndex={1}
          className="grid grid-cols-2 p-4 my-2 bg-white border rounded-lg cursor-pointer md:grid-cols-1 md:pl-0 md:h-40 md:w-32 border-grey peer-checked:border-purple peer-checked:text-purple peer-checked:bg-grey-light"
        >
          <span className="flex w-full md:flex-col">
            <img src={icon} alt="svg arcade icon" aria-hidden="true" className="max-h-10 max-w10" />
            <span className="flex flex-col pl-4 mt-auto">
              <span className="block font-medium text-blue-dark">{title}</span>
              <span className="flex items-center mt-1 text-sm text-grey-dark">{isAnnualPricing == true || isAnnualPricing == "true" ? `$${price * 10}/yr` : `$${price}/mo`}</span>
              { (isAnnualPricing == true || isAnnualPricing == "true") && <span className="mt-2 text-xs text-blue-dark">2 months free</span>}
            </span>
          </span>
        </label>
      </div>
    </>
  );
}

export { PlanType }
