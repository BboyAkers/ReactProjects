import { useFormContext } from "react-hook-form";

type AddOnItemType = {
  title: string;
  subtitle: string;
  price: number;
  isAnnualPricing: boolean;
}
const AddOnItem = ({ title, subtitle, price, isAnnualPricing }: AddOnItemType) => {
  const { register } = useFormContext();
  
  return (
    <label className="flex px-4 py-3 my-4 items-center bg-white border rounded-lg cursor-pointer border-grey has-[:checked]:border-purple has-[:checked]:text-purple has-[:checked]:bg-grey-light">
      <input {...register("addOns")} type="checkbox" value={[title, String(price)]} className="w-5 h-5 rounded accent-purple"/>
      <span className="flex justify-between w-full">
        <span className="flex flex-col pl-4">
          <span className="block font-medium text-blue-dark">{title}</span>
          <span className="flex items-center mt-1 text-xs text-grey-dark">{subtitle}</span>
        </span>
        <span className="flex items-center text-xs text-purple">
        {isAnnualPricing ? `$${price * 10}/yr` : `$${price}/mo`}
        </span>
      </span>
    </label>
  )
}

export { AddOnItem }
