import { useState, useEffect } from "react";
import { ImBrightnessContrast } from "react-icons/im";
import { CiDark } from "react-icons/ci";





function DarkSistem1() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
   
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
        <div onClick={toggleDarkMode} className="cursor-pointer" >
          {isDarkMode ? <CiDark className="text-2xl dark:text-white " /> : <ImBrightnessContrast className="text-2xl animate-spin" />}
        </div>
  );
}

export default DarkSistem1;










//  <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 transition-colors">
{/* <div className="text-center">
<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
  {isDarkMode ? "Dark Mode" : "Light Mode"}
</h1>
<button
  onClick={toggleDarkMode}
  className="mt-4 px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-500"
>
  Toggle to {isDarkMode ? "Light" : "Dark"} Mode
</button>
</div>
</div> */}