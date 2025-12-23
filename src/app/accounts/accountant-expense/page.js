"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusCircle, ArrowDownCircle, Settings } from "lucide-react";
import { exportToExcel } from "@/utils/exportToExcel";
import CustomPagination from "@/components/ui/custom-pagination";

export default function AccountantExpensePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data matching the screenshot
  const [reportData, setReportData] = useState([
    {
      id: 1,
      bank: "SBI",
      date: "30-Sep-2022",
      party: "aa",
      natureOfExpense: "100",
      gross: "100.00",
      tds: "100.00",
      netAmount: "100.00",
      modeOfPayment: "Paytm",
      clinic: "aa",
      billNo: "1212121",
      heads: "zzz",
    },
    {
      id: 2,
      bank: "SBI",
      date: "30-Sep-2022",
      party: "aa",
      natureOfExpense: "100",
      gross: "100.00",
      tds: "100.00",
      netAmount: "100.00",
      modeOfPayment: "Paytm",
      clinic: "aa",
      billNo: "1212121",
      heads: "zzz",
    },
    {
      id: 3,
      bank: "SBI",
      date: "10-Mar-2022",
      party: "Test",
      natureOfExpense: "5000",
      gross: "5000.00",
      tds: "5000.00",
      netAmount: "5000.00",
      modeOfPayment: "Paytm",
      clinic: "Test Clinic",
      billNo: "854785445",
      heads: "Test",
    },
    {
      id: 4,
      bank: "SBI",
      date: "30-Sep-2022",
      party: "aa",
      natureOfExpense: "100",
      gross: "100.00",
      tds: "100.00",
      netAmount: "100.00",
      modeOfPayment: "Paytm",
      clinic: "aa",
      billNo: "1212121",
      heads: "zzz",
    },
    {
      id: 5,
      bank: "SBI",
      date: "30-Sep-2023",
      party: "aa",
      natureOfExpense: "100",
      gross: "100.00",
      tds: "100.00",
      netAmount: "100.00",
      modeOfPayment: "Paytm",
      clinic: "aa",
      billNo: "1212121",
      heads: "zzz",
    },
  ]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reportData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
          <Settings className="w-4 h-4 text-red-600" />
        </div>
        <h1 className="text-xl font-bold text-red-600 dark:text-red-500 uppercase">
          ACCOUNTANT EXPENSE
        </h1>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Button className="bg-green-600 hover:bg-green-700 text-white gap-2 transition-colors">
          <PlusCircle className="w-4 h-4" />
          Import Excel
        </Button>
        <Button className="bg-blue-800 hover:bg-blue-900 text-white gap-2 transition-colors">
          <ArrowDownCircle className="w-4 h-4" />
          Download Blank Sheet
        </Button>
      </div>

      {/* Table */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-t-lg overflow-hidden overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#e6ffcc] dark:bg-[#e6ffcc]/20">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[60px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Sr. No.
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Bank
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Date
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Party
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Nature Of Expense
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Gross
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Tds
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Net Amount
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Mode Of Payment
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Clinic
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Bill Or Ref No
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200">
                Major And Minor Heads
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((row, index) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
              >
                <TableCell className="font-medium text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {indexOfFirstItem + index + 1}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.bank}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.date}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.party}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.natureOfExpense}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.gross}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.tds}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.netAmount}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.modeOfPayment}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.clinic}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.billNo}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 py-3">
                  {row.heads}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

       {/* Footer / Pagination */}
       <div className="flex justify-between items-center mt-4">
        {/* Pagination component */}
        <CustomPagination 
            totalItems={reportData.length} 
            itemsPerPage={itemsPerPage} 
            currentPage={currentPage} 
            onPageChange={setCurrentPage} 
        />
      </div>
    </div>
  );
}
