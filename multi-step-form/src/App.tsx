import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { PickAddOns } from "./components/PickAddOns";
import { FinishUp } from "./components/FinishUp";
import { FormCompleted } from "./components/FormCompleted";
import { Stepper } from "./components/Step";
import NavigationButtons from "./components/NavigationButtons";

export type FormInfo = {
  name: string;
  email: string;
  phone: string;
  isAnnualPricing: boolean |'true' | 'false';
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
  const methods = useForm({
    defaultValues: defaultFormInfoStates
  });

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
        methods.reset();
        break;
    }
  }

  useEffect(() => {
    if(!methods.getValues('name')){
      navigate("/");
    }
  }, [methods, navigate]);
  
  const onSubmit = (data: FormInfo) => {
    // Your data :)
    console.table(data);
    resolveNextRouteNavigation();
  };
  return (
    <>
      <div className="flex flex-col items-center h-screen bg-white-dark">
        <img src="/bg-sidebar-mobile.svg" alt="bg-sidebar-mobile" className="absolute top-0 w-full md:hidden"/>
        <div className="z-10 h-full px-4 mt-10 md:mt-0 md:flex md:items-center md:justify-center">
          <div className="md:hidden">
            <Stepper />
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 p-6 md:p-4 bg-white shadow-md md:grid-cols-6 rounded-xl border-grey w-full lg:w-[800px] md:h-[600px]">
                <div className="hidden h-full md:block md:col-span-2">
                  <Stepper />
                </div>
                <div className="py-10 md:col-span-4 md:px-8 lg:px-10">
                  <div>
                    <Routes>
                      <Route path="/" element={<PersonalInfoForm />} />
                      <Route path="/plan" element={<SelectYourPlan />} />
                      <Route path="/addons" element={<PickAddOns />} />
                      <Route path="/finish" element={<FinishUp />} />
                      <Route path="/completed" element={<FormCompleted />} />
                    </Routes>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[72px] bg-white w-full block px-3">
                <NavigationButtons navigate={navigate} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  )
}
export { App }
