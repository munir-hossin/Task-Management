import { ImBrightnessContrast } from "react-icons/im";
import MyTable  from "./table/MyTable"
import { LuSearch } from "react-icons/lu";
import Banner from "./Banner";
import Button from "./MyButton";
import Footer from "./Footer";



function Header() {
    return (
        <>
            <div className="max-w-6xl mx-auto mt-10">
                <div className="flex flex-wrap justify-between py-2 items-center border-b-[1px] px-2">
                    <div className="">
                        <h1 className="text-3xl font-bold">
                            <span className="text-rose-600">Munir</span>
                            <span className="text-green-950">Coder</span>
                        </h1>
                    </div>
                    <div>
                        <ImBrightnessContrast className="text-2xl" />
                    </div>
                </div>
                <Banner />
                <Button />

                <div className="overflow-x-auto mt-5 mb-9 border rounded-md">
                    <div className="flex items-center justify-between px-8 py-6">
                        <div>
                            {" "}
                            <h3 className="font-bold text-2xl text-rose-600">Your Task</h3>
                        </div>
                        <div className="flex items-center border border-gray-300 rounded-md ">
                            {" "}
                            <input className="border-none" type="text" placeholder="search" />
                            <LuSearch className="mr-3" />
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