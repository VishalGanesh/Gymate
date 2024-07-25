import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'

const AdminUser = () => {
  return (
    <>
        <div className='w-4/5 flex flex-row border-primary absolute top-20 justify-center items-center '>
                <div className='absolute left-5 font-bold text-xl '>
                    User
                </div>
                <div className='absolute right-5'>
                    <Button>Add</Button>
                </div>
            </div>
            <div className='w-4/5 absolute top-32 border-x-2 border-primary'>
              

                <Table >
                    <TableCaption className="text-black">A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow className='bg-primary '>
                            <TableHead className="w-[100px] text-black">Invoice</TableHead>
                            <TableHead className="text-black">Status</TableHead>
                            <TableHead className="text-black">Method</TableHead>
                            <TableHead className="text-right text-black">Amount</TableHead>
                        </TableRow>
                
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV002</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$150.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV003</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Net banking</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV004</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$450.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV005</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>UPI</TableCell>
                            <TableCell className="text-right">$500.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV006</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Net banking</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV007</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Net banking</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV008</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Net banking</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">INV009</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Net banking</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow><TableRow>
                            <TableCell className="font-medium">INV010</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Net banking</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>

                        

                    </TableBody>
                </Table>

            </div>
    </>
  )
}

export default AdminUser