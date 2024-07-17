import { Route, Routes, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { AppProvider, useAppState } from "./state";
import { PersonalInfoForm } from "./components/PersonalInfoForm";
import { SelectYourPlan } from "./components/SelectYourPlan";
import { PickAddOns } from "./components/PickAddOns";
import { FinishUp } from "./components/FinishUp";

function App() {
  const value = useAppState();
  const navigate = useNavigate();
  const methods = useForm();

  const resolveRouteNavigation = () => {
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
      default:
        navigate("/");
        break;
    }
  }

  const onSubmit = (data) => {
    console.log(data)
    console.log('testing spreads',{ ...value, ...data })
    resolveRouteNavigation();
  };
  return (
    <div className="flex items-center justify-center h-screen bg-white-dark">
      <AppProvider>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="p-6 mx-4 bg-white shadow-md rounded-xl border-grey">
              <Routes>
                <Route path="/" element={<PersonalInfoForm />} />
                <Route path="/plan" element={<SelectYourPlan />} />
                <Route path="/addons" element={<PickAddOns />} />
                <Route path="/finish" element={<FinishUp />} />
              </Routes>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[72px] bg-white">
              <div className="flex items-center justify-between h-full px-4">
                <button className="text-grey-dark" type="button">Go Back</button>
                <button className="px-4 py-2 text-white rounded-[4px] text-sm bg-blue-dark" type="submit">Next Step</button>
              </div>
            </div>
          </form>
        </FormProvider>
      </AppProvider>
    </div>
  )
}

{/* <FormProvider {...formMethods}>
  <form onSubmit={formMethods.handleSubmit(onSubmit)}>
    <FormCard>
      <PersonalInfoForm />
      <SelectYourPlan />
      <PickAddOns />
      <FinishUp />
      <FormCompleted />
    </FormCard>
    
  </form>
</FormProvider> */}

export default App
