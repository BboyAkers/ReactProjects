import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { PickAddOns } from "./components/PickAddOns";
import { FinishUp } from "./components/FinishUp";
import { FormCompleted } from "./components/FormCompleted";

export type FormInfo = {
  name: string;
  email: string;
  phone: string;
  isAnnualPricing: string | boolean;
  planType: string;
  addOns?: string[];
}
const defaultFormInfoStates: FormInfo = { 
  name: '',
  email: '',
  phone: '',
  isAnnualPricing: 'false',
  planType: '',
  addOns: []
}
function App() {
  const navigate = useNavigate();
  const methods = useForm();
  const [formInfo, setFormInfo] = useState(defaultFormInfoStates);

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
    <div className="flex items-center justify-center h-screen m-4">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="p-6 bg-white shadow-md rounded-xl border-grey">
              <Routes>
                <Route path="/" element={<PersonalInfoForm />} />
                <Route path="/plan" element={<SelectYourPlan />} />
                <Route path="/addons" element={<PickAddOns />} />
                <Route path="/finish" element={<FinishUp formInfo={formInfo} />} />
                <Route path="/completed" element={<FormCompleted />} />
              </Routes>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[72px] bg-white">
              <div className="flex items-center justify-between h-full px-4">
                <button className="text-grey-dark" type="button" disabled={location.pathname === "/"} onClick={() => navigate(-1)}>Go Back</button>
                {location.pathname !== "/finish" ? (
                  <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-blue-dark" type="submit">Next Step</button>
                ) : (
                  <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-purple" type="submit">Confirm</button>
                )} 
              </div>
            </div>
          </form>
        </FormProvider>
    </div>
  )
}
export { App }
