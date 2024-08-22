// Steps/Stepper.js
 
import { useLocation } from "react-router-dom";
 
export const Stepper = () => {
  const location = useLocation();
 
  const getLinkClass = (path:string) => {
    return (
      `px-3 py-1 border-2 rounded-full inline-block md:mx-4 ${path === location.pathname ? "bg-blue text-blue-dark border-blue" : "border-white"}`
    );
  };

  return (
    <nav className="md:bg-[url('/bg-sidebar-desktop.svg')] md:h-full md:bg-no-repeat">
      <ol className="z-50 flex justify-center md:justify-normal mb-8 md:mb-0 space-x-5 md:space-x-0 text-white md:flex-col md:*:h-16 p-5">
        <li className="flex items-center">
          <span className={getLinkClass("/")}>1</span>
          <div className="hidden md:inline-block">
            <span className="hidden text-xs text-blue-light md:block">STEP 1</span>
            <span className="text-sm font-semibold">YOUR INFO</span>
          </div>
        </li>
        <li>
          <span className={getLinkClass("/plan")}>2</span>
          <div className="hidden md:inline-block">
            <span className="hidden text-xs text-blue-light md:block">STEP 2</span>
            <span className="text-sm font-semibold">SELECT PLAN</span>
          </div>
        </li>
        <li>
          <span className={getLinkClass("/addons")}>3</span>
          <div className="hidden md:inline-block">
            <span className="hidden text-xs text-blue-light md:block">STEP 3</span>
            <span className="text-sm font-semibold">ADD-ONS</span>
          </div>
        </li>
        <li>
          <span className={getLinkClass("/finish")}>4</span>
          <div className="hidden md:inline-block">
            <span className="hidden text-xs text-blue-light md:block">STEP 4</span>
            <span className="text-sm font-semibold">FINISH</span>
          </div>
        </li>
        <li>
          <span className={getLinkClass("/completed")}>5</span>
          <div className="hidden md:inline-block">
            <span className="hidden text-xs text-blue-light md:block">STEP 5</span>
            <span className="text-sm font-semibold">SUBMITTED</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
