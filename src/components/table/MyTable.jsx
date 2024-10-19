import { Table } from "flowbite-react";
import TableItem from "./TableItem";





function MyTable() {
    return (
        <div>
              <div>
               <Table >
                            <Table.Head className="font-bold text-black">
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell>
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority </Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                            <Table.HeadCell>
                            </Table.HeadCell>
                            </Table.Head>
                            
                          <TableItem />
                          <TableItem />
                          <TableItem />
                        </Table>
        </div>
        </div>
    );
}

export default MyTable;