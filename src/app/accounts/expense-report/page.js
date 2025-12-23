"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileSpreadsheet, Settings } from "lucide-react";
import { exportToExcel } from "@/utils/exportToExcel";
import CustomPagination from "@/components/ui/custom-pagination";

export default function ExpenseReportPage() {
  const [clinicName, setClinicName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data matching the screenshot
  const [reportData, setReportData] = useState([
    {
      id: 1,
      clinic: "Market Yard",
      doctor: "Dr.Anagha Patil Chavan",
      vendorType: "Courier",
      vendor: "--- Select ---",
      amount: "150.00",
      date: "29-12-2025",
    },
    {
      id: 2,
      clinic: "Salunkhe vihar",
      doctor: "Dr.Anagha Patil Chavan",
      vendorType: "Courier",
      vendor: "--- Select ---",
      amount: "80.00",
      date: "23-12-2025",
    },
    {
      id: 3,
      clinic: "Salunkhe vihar",
      doctor: "Dr.Anagha Patil Chavan",
      vendorType: "Stationary",
      vendor: "stationery shop",
      amount: "95.00",
      date: "23-12-2025",
    },
    {
      id: 4,
      clinic: "BYCULLA West",
      doctor: "Dr.RUCHI BHANSALI",
      vendorType: "Travelling",
      vendor: "From Byculla To Dadar",
      amount: "10.00",
      date: "22-12-2025",
    },
    {
      id: 5,
      clinic: "Salunkhe vihar",
      doctor: "Dr.Anagha Patil Chavan",
      vendorType: "Courier",
      vendor: "--- Select ---",
      amount: "100.00",
      date: "21-12-2025",
    },
    {
      id: 6,
      clinic: "Salunkhe vihar",
      doctor: "Dr.Anagha Patil Chavan",
      vendorType: "Courier",
      vendor: "--- Select ---",
      amount: "220.00",
      date: "20-12-2025",
    },
    {
      id: 7,
      clinic: "Vapi",
      doctor: "Dr.Khushbu Ranva",
      vendorType: "Courier",
      vendor: "--- Select ---",
      amount: "100.00",
      date: "20-12-2025",
    },
    {
      id: 8,
      clinic: "Vapi",
      doctor: "Dr.Khushbu Ranva",
      vendorType: "Courier",
      vendor: "--- Select ---",
      amount: "210.00",
      date: "19-12-2025",
    },
    {
      id: 9,
      clinic: "Vapi",
      doctor: "Dr.Khushbu Ranva",
      vendorType: "Cleaning Supplies",
      vendor: "GENERAL STORE",
      amount: "649.00",
      date: "19-12-2025",
    },
    {
      id: 10,
      clinic: "BYCULLA West",
      doctor: "Dr.RUCHI BHANSALI",
      vendorType: "Clinic Maintenance",
      vendor: "Amazon",
      amount: "100.00",
      date: "19-12-2025",
    },
    {
      id: 11,
      clinic: "BYCULLA West",
      doctor: "Dr.RUCHI BHANSALI",
      vendorType: "Clinic Maintenance",
      vendor: "Amazon",
      amount: "150.00",
      date: "19-12-2025",
    },
  ]);

  const handleSearch = () => {
    console.log("Searching with:", { clinicName, doctorName, fromDate, toDate });
  };

  const handleExport = () => {
    exportToExcel(reportData, "Expense_Report");
  };

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
          EXPENSE REPORT
        </h1>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        {/* Clinic Name */}
        <div className="space-y-1">
           <Select value={clinicName} onValueChange={setClinicName}>
            <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                <SelectValue placeholder="-- Select Clinic --" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="market_yard">Market Yard</SelectItem>
                <SelectItem value="salunkhe_vihar">Salunkhe vihar</SelectItem>
                <SelectItem value="byculla_west">BYCULLA West</SelectItem>
                <SelectItem value="vapi">Vapi</SelectItem>
            </SelectContent>
            </Select>
        </div>

        {/* Doctor */}
        <div className="space-y-1">
           <Select value={doctorName} onValueChange={setDoctorName}>
            <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                <SelectValue placeholder="-- Select Doctor --" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="dr_anagha">Dr.Anagha Patil Chavan</SelectItem>
                <SelectItem value="dr_ruchi">Dr.RUCHI BHANSALI</SelectItem>
                <SelectItem value="dr_khushbu">Dr.Khushbu Ranva</SelectItem>
            </SelectContent>
            </Select>
        </div>
        
        {/* From Date */}
        <div className="space-y-1">
           <Input
            type="date"
            placeholder="From Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="h-10 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
          />
        </div>

        {/* To Date */}
        <div className="space-y-1">
           <Input
            type="date"
            placeholder="To Date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="h-10 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700"
          />
        </div>

        {/* Search Button */}
        <div className="">
          <Button
            onClick={handleSearch}
            className="bg-[#D35400] hover:bg-[#ba4a00] text-white px-8 h-10 w-full transition-colors"
          >
            Search
          </Button>
        </div>
      </div>

       {/* Total Count */}
      <div className="flex justify-end pr-2">
         <span className="font-semibold text-gray-600 dark:text-gray-400 text-sm">Total : 13227321.00</span>
      </div>

      {/* Table */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-t-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-[#e6ffcc] dark:bg-[#e6ffcc]/20">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[60px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Sr No.
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Clinic Name
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                 Doctor Name
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                 Vendor Type
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                 Vendor / Travelling
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Amount
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200">
                 Date
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
                  {row.clinic}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.doctor}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.vendorType}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.vendor}
                </TableCell>
                 <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.amount}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 py-3">
                  {row.date}
                </TableCell>
              </TableRow>
            ))}
             <TableRow className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30">
                 <TableCell colSpan={5} className="border-r border-gray-200 dark:border-gray-700 py-3"></TableCell>
                 <TableCell className="font-bold text-gray-700 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3 text-right pr-4">
                    Total
                 </TableCell>
                 <TableCell className="font-bold text-gray-700 dark:text-gray-300 py-3">
                    100.00
                 </TableCell>
             </TableRow>
          </TableBody>
        </Table>
      </div>
      
       {/* Footer / Pagination / Export */}
      <div className="flex justify-between items-center mt-4">
        {/* Excel Export */}
        <div className="cursor-pointer" onClick={handleExport} title="Download Excel">
           <div className="w-8 h-8 flex items-center justify-center bg-green-700 hover:bg-green-800 text-white rounded shadow transition-colors">
            <FileSpreadsheet className="w-5 h-5" />
           </div>
        </div>
        
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
