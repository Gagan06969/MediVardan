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

export default function PatientwiseCollectionReportPage() {
  const [clinicName, setClinicName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data matching the screenshot
  const [reportData, setReportData] = useState([
    { id: 1, clinicName: "ADYAR", doctorName: "Dr.AKARNA R", patientCode: "P106205", patientName: "prithisha adyar", grandAmount: "40000.00", paidAmount: "5000.00", pendingAmount: "35000.00", paymentMode: "UPI" },
    { id: 2, clinicName: "Camp,pune", doctorName: "Dr.Anagha Patil Chavan", patientCode: "P113923", patientName: "Sahil Sayyed", grandAmount: "18000.00", paidAmount: "18000.00", pendingAmount: "0.00", paymentMode: "FIBE" },
    { id: 3, clinicName: "dhanori", doctorName: "Dr.Dhanashree Shinde", patientCode: "P111941", patientName: "pratiksha sontakke", grandAmount: "2400.00", paidAmount: "2400.00", pendingAmount: "0.00", paymentMode: "UPI" },
    { id: 4, clinicName: "Dombivali East", doctorName: "Dr.MADHU PAWAR", patientCode: "P103384", patientName: "aruna BONDE", grandAmount: "230000.00", paidAmount: "12000.00", pendingAmount: "218000.00", paymentMode: "UPI" },
    { id: 5, clinicName: "Dombivali East", doctorName: "Dr.MADHU PAWAR", patientCode: "P107053", patientName: "kallas sanas", grandAmount: "500.00", paidAmount: "500.00", pendingAmount: "0.00", paymentMode: "UPI" },
    { id: 6, clinicName: "EDAPPALLY", doctorName: "Dr. Akhil Nair", patientCode: "P113944", patientName: "MOHAMMED ANFAZ SHARIEFF", grandAmount: "42000.00", paidAmount: "30000.00", pendingAmount: "12000.00", paymentMode: "UPI" },
    { id: 7, clinicName: "EDAPPALLY", doctorName: "Dr. Akhil Nair", patientCode: "P113948", patientName: "SAKETH SRINIVASAN", grandAmount: "112000.00", paidAmount: "10000.00", pendingAmount: "102000.00", paymentMode: "UPI" },
    { id: 8, clinicName: "EDAPPALLY", doctorName: "Dr. Akhil Nair", patientCode: "P111633", patientName: "SHAISTHA SABA", grandAmount: "60000.00", paidAmount: "12000.00", pendingAmount: "48000.00", paymentMode: "UPI" },
    { id: 9, clinicName: "GOREGAON East", doctorName: "Dr.Prajakta Durgawale", patientCode: "P113929", patientName: "bhavna dadlani", grandAmount: "1500.00", paidAmount: "1500.00", pendingAmount: "0.00", paymentMode: "UPI" },
    { id: 10, clinicName: "GOREGAON East", doctorName: "Dr.Prajakta Durgawale", patientCode: "P113935", patientName: "poonam karn", grandAmount: "1500.00", paidAmount: "1500.00", pendingAmount: "0.00", paymentMode: "UPI" },
  ]);

  const handleSearch = () => {
    console.log("Searching with:", { clinicName, doctorName, patientName, fromDate, toDate });
  };

  const handleExport = () => {
    exportToExcel(reportData, "Patientwise_Collection_Report");
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
          PATIENT COLLECTION REPORT
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-end bg-white dark:bg-gray-800 p-4 rounded-lg flex-wrap border border-gray-200 dark:border-gray-700">
        {/* Clinic Name */}
        <div className="w-full md:w-[23%] space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Clinic Name</label>
           <Select value={clinicName} onValueChange={setClinicName}>
            <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                <SelectValue placeholder="-- Select Clinic --" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="adyar">ADYAR</SelectItem>
                <SelectItem value="camp">Camp,pune</SelectItem>
                <SelectItem value="dhanori">dhanori</SelectItem>
            </SelectContent>
            </Select>
        </div>

        {/* Doctor Name */}
        <div className="w-full md:w-[23%] space-y-1">
             <label className="text-xs font-semibold text-gray-500 uppercase">Doctor Name</label>
           <Select value={doctorName} onValueChange={setDoctorName}>
            <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                <SelectValue placeholder="-- Select Doctor --" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="akarna">Dr.AKARNA R</SelectItem>
                <SelectItem value="anagha">Dr.Anagha Patil Chavan</SelectItem>
                <SelectItem value="dhanashree">Dr.Dhanashree Shinde</SelectItem>
            </SelectContent>
            </Select>
        </div>

        {/* Patient Name */}
         <div className="w-full md:w-[23%] space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Patient Name</label>
           <Input
            type="text"
            placeholder="Patient Name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700"
          />
        </div>
        
        {/* Gap Filler for next row alignment if needed, or simply empty space */}
         <div className="hidden md:block md:w-auto flex-grow" />

         {/* Second Row of Filters - Force wrap logic handled by flex-wrap */}
        
        {/* From Date */}
        <div className="w-full md:w-[23%] space-y-1">
             <label className="text-xs font-semibold text-gray-500 uppercase">From Date</label>
           <Input
            type="date"
            placeholder="From Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700"
          />
        </div>

        {/* To Date */}
        <div className="w-full md:w-[23%] space-y-1">
             <label className="text-xs font-semibold text-gray-500 uppercase">To Date</label>
           <Input
            type="date"
            placeholder="To Date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700"
          />
        </div>

        {/* Search Button */}
        <div className="w-full md:w-auto">
          <Button
            onClick={handleSearch}
            className="bg-[#D35400] hover:bg-[#ba4a00] text-white px-8 h-10 w-full md:w-auto transition-colors"
          >
            Search
          </Button>
        </div>
      </div>

       {/* Summary Stats */}
      <div className="flex flex-wrap gap-8 items-center text-sm font-medium text-gray-600 dark:text-gray-400 px-2">
          <span>Grand Total : 2703580291.34</span>
          <span>Paid Total: 1153089247.41</span>
          <span>Pending Total : 1550491043.93</span>
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
                 Patient Code
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                 Patient Name
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600 text-right">
                 Grand Amount
              </TableHead>
               <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600 text-right">
                 Paid Amount
              </TableHead>
               <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600 text-right">
                 Pending Amount
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 text-left">
                 Payment Mode
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
                  {row.clinicName}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.doctorName}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.patientCode}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {row.patientName}
                </TableCell>
                 <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3 text-right">
                  {row.grandAmount}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3 text-right">
                  {row.paidAmount}
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3 text-right">
                  {row.pendingAmount}
                </TableCell>
                 <TableCell className="text-gray-600 dark:text-gray-300 py-3 text-left">
                  {row.paymentMode}
                </TableCell>
              </TableRow>
            ))}
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
