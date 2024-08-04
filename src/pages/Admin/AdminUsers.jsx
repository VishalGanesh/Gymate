import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const AdminUser = () => {
  return (
    <>
      <div className="w-4/5 flex flex-row border-primary absolute top-20 justify-center items-center ">
        <div className="absolute left-0 font-bold text-xl ">Admin</div>
        <div className="absolute right-0 align items-center ">
          <Button>Add</Button>
        </div>
      </div>
      <div className="w-4/5 absolute top-32 border-x-2 border-primary">
        <Table>
          <TableCaption className="text-black">
            A list of your recent invoices.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-primary ">
              
  <TableHead className="w-[100px] text-black">Name</TableHead>
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black">Method</TableHead>
              <TableHead className="text-right text-black">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Vignesh</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$25.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Rishi</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$17.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Sugu</TableCell>
              {/* <TableCell>Name</TableCell> */}
              <TableCell>Paid</TableCell>
              <TableCell>Net banking</TableCell>
              <TableCell className="text-right">$23.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kavin</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$44.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Kiran</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>UPI</TableCell>
              <TableCell className="text-right">$50.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Santhanam</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Net banking</TableCell>
              <TableCell className="text-right">$2500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Aswin</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Debit Card</TableCell>
              <TableCell className="text-right">$32.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Prashant</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Net banking</TableCell>
              <TableCell className="text-right">$15.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Deva</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>UPI</TableCell>
              <TableCell className="text-right">$50.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Surya</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>UPI</TableCell>
              <TableCell className="text-right">$25.99</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default AdminUser;