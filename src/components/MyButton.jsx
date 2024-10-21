import { Button} from "flowbite-react";
import OurModal from "./OurModal";
import { useState } from "react";
import { createPortal } from "react-dom";



function MyButton() {


    const [openModal, setOpenModal] = useState(false);


    return (
       
    

     <div className="flex px-4 justify-center md:justify-end pb-5 pt-9">
        <Button onClick={() => {setOpenModal(true)}} className="mr-3" color="success">Add Task</Button>  
        <Button color="failure">Clear Tasks</Button>
        <OurModal onopen={openModal} onClose={() => {setOpenModal(false)}}/>
        
     </div>

    );
}

export default MyButton;