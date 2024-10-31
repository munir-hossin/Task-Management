import { useEffect, useState } from "react";
import Container from "../../components/Container";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";


function Header() {

  const [theme, setTheme] = useState(localStorage.getItem('themeMode') || 'light');


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('themeMode', theme);
  }, [theme]);


  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="py-4 border-b border-solid dark:border-[#666]">
      <Container className="flex justify-between items-center">
        <h1 className="font-bold text-3xl"><span className="dark:text-gray-300 text-yellow-400">Dr. Abdul Mannan khan</span></h1>
        {theme == 'dark'
        ?
        <CiDark 
          onClick={themeHandler}
          className={`text-xl cursor-pointer ${theme === 'dark' && 'text-white'}`}
        />
        :
        <MdOutlineLightMode
        onClick={themeHandler}
        className={`text-xl cursor-pointer ${theme === 'dark' && 'text-white'}`}
      />
        }
      </Container>
    </div>
  );
}

export default Header;





// import { CiDark } from "react-icons/ci";
// <CiDark />
