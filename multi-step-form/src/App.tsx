import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { PickAddOns } from "./components/PickAddOns";
import { FinishUp } from "./components/FinishUp";
import { FormCompleted } from "./components/FormCompleted";
import { Stepper } from "./components/Step";

export type FormInfo = {
  name: string;
  email: string;
  phone: string;
  isAnnualPricing: boolean;
  planType: string;
  addOns?: string[];
}
const defaultFormInfoStates: FormInfo = { 
  name: '',
  email: '',
  phone: '',
  isAnnualPricing: false,
  planType: '',
  addOns: []
}
function App() {
  const navigate = useNavigate();
  const methods = useForm();
  const [formInfo, setFormInfo] = useState(defaultFormInfoStates);

  const toggleAnnualPricing = () => {
    setFormInfo({ ...formInfo, isAnnualPricing: !formInfo.isAnnualPricing });
  };

  const resolveNextRouteNavigation = () => {
    switch (location.pathname) {
      case "/":
        navigate("/plan");
        break;
      case "/plan":
        navigate("/addons");
        break;
      case "/addons":
        navigate("/finish");
        break;
        case "/finish":
          navigate("/completed");
          break;
      default:
        navigate("/");
        break;
    }
  }
  
  const onSubmit = (data) => {
    setFormInfo({ ...data });
    resolveNextRouteNavigation();
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-white-dark">
        <img src="/bg-sidebar-mobile.svg" alt="bg-sidebar-mobile" className="absolute top-0 w-full md:hidden"/>
        <div className="z-10 px-4 mt-10">
          <div className="md:hidden">
            <Stepper />
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 p-6 md:p-4 bg-white shadow-md md:grid-cols-6 rounded-xl border-grey max-w-[940px] md:h-[600px]">
                <div className="hidden h-full md:block md:col-span-2">
                  <Stepper />
                </div>
                <div className="py-10 md:col-span-4 md:px-14">
                  <Routes>
                    <Route path="/" element={<PersonalInfoForm />} />
                    <Route path="/plan" element={<SelectYourPlan isAnnualPricing={formInfo.isAnnualPricing} toggleAnnualPricing={toggleAnnualPricing} />} />
                    <Route path="/addons" element={<PickAddOns isAnnualPricing={formInfo.isAnnualPricing} />} />
                    <Route path="/finish" element={<FinishUp formInfo={formInfo} />} />
                    <Route path="/completed" element={<FormCompleted />} />
                  </Routes>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[72px] bg-white w-full">
                <div className="flex items-center justify-between h-full px-4">
                  <button className="text-grey-dark" type="button" disabled={location.pathname === "/"} onClick={() => navigate(-1)}>Go Back</button>
                  {location.pathname == "/finish" ? (
                    <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-purple" type="submit">Confirm</button>
                  ) : (
                  location.pathname == "/completed" ? (
                    <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-purple" type="submit">New Form</button>
                  ) : 
                    <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-blue-dark" type="submit">Next Step</button>
                  )} 
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )
}
export { App }
