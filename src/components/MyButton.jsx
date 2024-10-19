import { Button} from "flowbite-react";

function MyButton() {
    return (
       
        <div className="flex justify-end pb-5 pt-9">
        <Button className="mr-3" color="success">
            Add Task
        </Button>
        <Button color="failure">Clear Tasks</Button>
    </div>
    );
}

export default MyButton;