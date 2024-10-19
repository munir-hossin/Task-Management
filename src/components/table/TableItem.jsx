import { Table } from "flowbite-react";

function TableItem() {
    return (
        <>
              <Table.Body>
                    <Table.Row >
                        <Table.Cell className=" dark:text-gray-400  text-black text-lg"># API Build</Table.Cell>
                        <Table.Cell className=" dark:text-gray-400 text-black  text-lg">1 Create an API by using <br/> laravel platform</Table.Cell>
                        <Table.Cell className=" dark:text-gray-400 text-black  text-lg">Munirul islam</Table.Cell>
                        <Table.Cell className=" dark:text-gray-400 text-black  text-lg">Height</Table.Cell>
                        <Table.Cell className="  text-green-400 text-lg">Edit</Table.Cell>
                        <Table.Cell className="  text-red-500 text-lg">Delete</Table.Cell>
                        <Table.Cell>
                        </Table.Cell>
                    </Table.Row>
                        
                    </Table.Body>
        </>
    );
}

export default TableItem;