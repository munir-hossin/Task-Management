import { MdOutlineFormatListNumbered } from "react-icons/md";
import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import TaskItem from './TaskItem';
import TaskTableHeader from './TaskTableHeader';
import { useState } from 'react';
import { ModalPopup } from '../../components/ModalPopup';
import Container from '../../components/Container';

function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>
        </Table.Row>
    );
}

function TaskTable() {
    const [openModal, setOpenModal] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [searchText, setSearchText] = useState('');

    // Create a new task
    const createHandler = (item) => {
        const updatedTasks = [...tasks, item];
        setTasks(updatedTasks.reverse());
    };

    // Edit an existing task
    const editHandler = (task) => {
        setTasks(tasks.map(item => (task.id === item.id ? task : item)));
    };

    // Delete a specific task
    const deleteHandler = (id) => {
        setTasks(tasks.filter(item => item.id !== id));
    };

    // Filter tasks based on search text
    const searchHandler = (text) => {
        setSearchText(text);
    };

    const updatedTasks = tasks.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <Container className="mt-3">
            <div className="flex justify-center mb-6 md:justify-end w-full">
                <Button onClick={() => setOpenModal(true)} className="mr-2" color="success">Add Task</Button>
                <Button onClick={() => setTasks([])} color="failure">Clear Tasks</Button>
            </div>
            <div className="p-3 rounded-sm border dark:border-[#666] my-3">
                <TaskTableHeader onSearch={searchHandler} />

                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell><MdOutlineFormatListNumbered  /></Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {tasks.length === 0 ? (
                                <NoData />
                            ) : (
                                updatedTasks.map((item, index) => (
                                    <TaskItem
                                        key={item.id}
                                        data={item}
                                        index={index}
                                        onDelete={deleteHandler}
                                        onEdit={editHandler}
                                    />
                                ))
                            )}
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <ModalPopup onCreate={createHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
        </Container>
    );
}

export default TaskTable;
