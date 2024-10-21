/* eslint-disable react/prop-types */
import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required().min(5).max(10),
  description: yup.string().required().min(10).max(20),
  assignto: yup.string().required(),
  priority: yup.string().required(),

}).required();





function OurModal({ onopen, onClose }) {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
      
  
  const onSubmit = data => console.log(data);


    return (
        <>
            <Modal dismissible show={onopen} onClose={() => onClose(false)}>
                <Modal.Header className="font-bold ">Add Task</Modal.Header>
                <Modal.Body>
                   <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="space-y-6">
                        <div>
                            <h3 className="mb-1 font-bold">Title</h3>
                            <input {...register("title")} id="title"  className="bg-gray-50 w-full rounded-lg" type="text" />
                            <p className="text-purple-500">{errors.title?.message}</p>
                        </div>
                        <div>
                            <h3 className="mb-1 font-bold">Description</h3>
                            <textarea {...register("description")}  className="bg-gray-50 h-24 w-full rounded-lg" id="description"></textarea>
                            <p className="text-purple-500">{errors.description?.message}</p>
                        </div>

                        <div>
                            <h3 className="mb-1 font-bold">Assign to</h3>
                            <select {...register("assignto")} className="text-fuchsia-600 bg-gray-50 w-[59%] rounded-lg" id="assign">
                             <option>{errors.assignto?.message}</option>
                                <option value="Person One">Person One</option>
                                <option value="Person Two">Person Two</option>
                                <option value="Person Three">Person Three</option>
                            </select>
                            {/* <span className="">Priority</span> */}
                            <select {...register("priority")} className="text-fuchsia-600 bg-gray-50 w-[39%] rounded-lg ml-2" id="assign">
                            <option>{errors.priority?.message}</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                   <Button className="mt-3" type="submit">submit</Button>

                  </form>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button>I accept</Button>
                    <Button color="gray">Decline</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default OurModal;
