import Container from "../../components/Container"
// import bannerImage from '../../images/task.png';
import bannerImage from '../../images/newbg.webp';

function Banner() {
  return (
    <Container className="grid grid-cols-2 items-center">
      <div className="">
        <h1 className="text-5xl font-bold mb-3 text-rose-700 dark:text-yellow-400">Task Management </h1>
        <p className="text-lg dark:text-stone-300">Easily manage and organize tasks related to patient care, with tools designed specifically for doctors. Our task management system allows you to prioritize and streamline patient appointments, follow-ups, and treatments. Stay focused on what matters most—providing quality care—while seamlessly tracking each task's progress.</p>
      </div>
      <div className="mx-auto ">
        {/* <img className="max-w-xs" src={bannerImage} alt="banner image" /> */}
        <img className="max-w-md" src={bannerImage} alt="banner image" />
      </div>
    </Container>
  )
}

export default Banner


