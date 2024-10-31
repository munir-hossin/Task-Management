
import Banner from "../sections/banner/Banner";
import Footer from "../sections/footer/Footer";
import Header from "../sections/header/Header";
import TaskTable from "../sections/task-table/TaskTable";


function Layout() {

  return (
    <>
     <div  className="lg:max-w-[1200px] mx-auto">
     <Header/>
      <Banner/>
      <TaskTable/>
     </div>
      <Footer />
    </>
  )
}

export default Layout

//  className="max-w-[1200px] mx-auto"