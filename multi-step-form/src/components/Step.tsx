// Steps/Stepper.js
 
import { useLocation } from "react-router-dom";
 
export const Stepper = () => {
  const location = useLocation();
 
  const getLinkClass = (path:string) => {
    return (
      `p-2 ${path === location.pathname ? "bg-blue text-blue-dark border-blue" : "border-white"}`
    );
  };

  return (
    <nav className="md:bg-[url('/bg-sidebar-desktop.svg')] md:h-full md:bg-no-repeat md:bg-contain">
      <ol className="flex space-x-5 *:border-2 *:rounded-full *:px-4 mb-8 text-white justify-center z-50">
        <li className={getLinkClass("/")}>
          <span>1</span>
        </li>
        <li className={getLinkClass("/plan")}>
          <span>2</span>
        </li>
        <li className={getLinkClass("/addons")}>
          <span>3</span>
        </li>
        <li className={getLinkClass("/finish")}>
          <span>4</span>
        </li>
        <li className={getLinkClass("/completed")}>
          <span>5</span>
        </li>
      </ol>
    </nav>
  );
};
