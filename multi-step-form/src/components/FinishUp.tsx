import { Link } from "react-router-dom";
import { FormInfo } from "../App";

type FinishUpProps = {
  formInfo: FormInfo;
};

const FinishUp = ({formInfo}:FinishUpProps) => {
  const {name, email, phone, isAnnualPricing, planType, addons } = formInfo
  const parsedPlanType = formInfo?.planType.split(',') 
  return (
    <>
      <h2 className="pb-2 text-2xl font-semibold text-blue-dark">Finish up</h2>
      <p className="mb-4 font-light text-grey-dark">Double-check everything looks OK before confirming.</p>
      <div className="p-4 mb-2 text-sm bg-grey-light">
        <div className="flex justify-between">
          <div>
            <p className="font-medium text-blue-dark">{parsedPlanType[0]} ({isAnnualPricing == "true" ? 'Annual' : 'Monthly'})</p>
            <Link to="/plan" className="underline text-grey-dark">Change</Link>
          </div>
          <span className="font-bold">${parsedPlanType[1]}/{isAnnualPricing == "true" ? 'yr' : 'mo'}</span>
        </div>
        {addons ? (
          <>
            <hr className="my-3" />
            <p className="flex justify-between pb-2 text-grey-dark">something <span className="text-blue-dark">+$1/mo</span></p>
          </>
        ): ''}
        
        {/* <p className="flex justify-between text-grey-dark">Large storage <span className="text-blue-dark">+$2/mo</span></p> */}
      </div>
      <p className="flex justify-between px-2 py-3 text-sm text-grey-dark">Total (per month) <span className="text-base font-bold text-purple">+$12/mo</span></p>
    </>
  )
}

export { FinishUp }
