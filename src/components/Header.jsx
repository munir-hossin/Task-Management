import MyTable  from "./table/MyTable"
import { LuSearch } from "react-icons/lu";
import Banner from "./Banner";
import Button from "./MyButton";
import Footer from "./Footer";
import DarkSistem1 from "./DarkSistem1";





function Header() {
    return (
        <>
            <div className="max-w-6xl mx-auto mt-10">
                <div className="flex flex-wrap justify-between py-2 items-center border-b-[1px] px-4">
                    <div className="">
                        <h1 className="text-3xl font-bold">
                            <span className="text-rose-600">Munir</span>
                            <span className="text-green-950 dark:text-gray-400">Coder</span>
                        </h1>
                    </div>
                    <div>
                        <DarkSistem1 />
                    </div>
                </div>
                <Banner />
                <Button />
              
               

                <div className="overflow-x-auto mt-5 mb-9 border rounded-md">
                    <div className="flex items-center justify-between px-8 py-6 flex-wrap">
                        <div>                
                            <h3 className="font-bold text-2xl dark:text-gray-400">Your Task</h3>
                        </div>
                        <div className="flex items-center border rounded-md ">               
                            <input className="dark:bg-slate-800 border-none" type="text" placeholder="search" />
                            <LuSearch className="mr-3 dark:text-gray-400" />
                        </div>
                    </div>

                    <MyTable />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Header;