"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Search, X, FileSpreadsheet, Settings } from "lucide-react";

export default function OnlinePaymentInvoicePage() {
  const [filters, setFilters] = useState({
    clinicName: "",
    invoiceNo: "",
    fromDate: "2025-12-07",
    toDate: "2025-12-22",
  });

  // Mock Data matching the screenshot
  const mockData = [
    {
      id: 1,
      clinicName: "Dehradun",
      patientCode: "P113607",
      patientName: "shubhashish bhatt",
      invoiceNo: "UTP003142526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "500.00",
      paymentMode: "UPI",
      transactionNo: "115661718611",
    },
    {
      id: 2,
      clinicName: "Dehradun",
      patientCode: "P113604",
      patientName: "rakesh agarwal",
      invoiceNo: "UTP003112526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "2,500.00",
      paymentMode: "UPI",
      transactionNo: "115661718611",
    },
    {
      id: 3,
      clinicName: "LB NAGAR",
      patientCode: "P113613",
      patientName: "C Vijaya Bhaskar",
      invoiceNo: "TEL003262526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "5,000.00",
      paymentMode: "UPI",
      transactionNo: "12512171147195511932202",
    },
     {
      id: 4,
      clinicName: "LB NAGAR",
      patientCode: "P113613",
      patientName: "C Vijaya Bhaskar",
      invoiceNo: "TEL003262526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "5,000.00",
      paymentMode: "UPI",
      transactionNo: "12512171147195511932202",
    },
     {
      id: 5,
      clinicName: "MADHAPUR",
      patientCode: "P113577",
      patientName: "vijay kumar I",
      invoiceNo: "TEL002312526",
      paymentDate: "16-Dec-2025",
      revenueAmount: "3,000.00",
      paymentMode: "UPI",
      transactionNo: "571619951287",
    },
    {
      id: 6,
      clinicName: "MAMBALAM",
      patientCode: "P113679",
      patientName: "Uma gopalkrishnan G",
      invoiceNo: "TAN004452526",
      paymentDate: "18-Dec-2025",
      revenueAmount: "40,000.00",
      paymentMode: "UPI",
      transactionNo: "553369234255",
    },
     {
      id: 7,
      clinicName: "ADYAR",
      patientCode: "P113609",
      patientName: "ravi shankar",
      invoiceNo: "TAN003222526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "2,500.00",
      paymentMode: "UPI",
      transactionNo: "571788390677",
    },
     {
      id: 8,
      clinicName: "TRICHY",
      patientCode: "P113595",
      patientName: "Marri S",
      invoiceNo: "TAN002982526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "25,000.00",
      paymentMode: "UPI",
      transactionNo: "195122365490",
    },
    {
      id: 9,
      clinicName: "ADYAR",
      patientCode: "P113521",
      patientName: "pughal ady",
      invoiceNo: "TAN001592526",
      paymentDate: "15-Dec-2025",
      revenueAmount: "2,000.00",
      paymentMode: "UPI",
      transactionNo: "534938066745",
    },
    {
      id: 10,
      clinicName: "ADYAR",
      patientCode: "P105305",
      patientName: "sindhu k adyar",
      invoiceNo: "TAN000832526",
      paymentDate: "11-Dec-2025",
      revenueAmount: "101.00",
      paymentMode: "UPI",
      transactionNo: "570918396580",
    },
  ];

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleClear = () => {
    setFilters({
      clinicName: "",
      invoiceNo: "",
      fromDate: "",
      toDate: "",
    });
  };

  return (
    <div className="w-full p-4 space-y-6 min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <h1 className="text-xl font-bold text-red-500 uppercase tracking-wide">
        CREDIT CARD / DEBIT CARD AND UPI INVOICE REPORT
      </h1>

      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white dark:bg-gray-900 rounded-lg">
        {/* Clinic Name */}
        <div className="md:col-span-3 space-y-1">
          <Label className="text-xs font-semibold text-gray-500">Clinic Name</Label>
          <Select
            value={filters.clinicName}
            onValueChange={(val) => handleFilterChange("clinicName", val)}
          >
            <SelectTrigger className="h-9 bg-white border-gray-300">
              <SelectValue placeholder="-- Select Clinic --" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dehradun">Dehradun</SelectItem>
              <SelectItem value="lb nagar">LB Nagar</SelectItem>
              <SelectItem value="madhapur">Madhapur</SelectItem>
              <SelectItem value="mambalam">Mambalam</SelectItem>
              <SelectItem value="adyar">Adyar</SelectItem>
              <SelectItem value="trichy">Trichy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Invoice No */}
        <div className="md:col-span-3 space-y-1">
          <Label className="text-xs font-semibold text-gray-500">Invoice No</Label>
          <Input
             className="h-9 bg-white border-gray-300"
             placeholder="Invoice No"
             value={filters.invoiceNo}
             onChange={(e) => handleFilterChange("invoiceNo", e.target.value)}
          />
        </div>

         {/* Empty Spacer */}
         <div className="hidden md:block md:col-span-6"></div>

         {/* From Date */}
         <div className="md:col-span-3">
           <Input
              type="date"
              className="h-9 bg-white border-gray-300"
              value={filters.fromDate}
              onChange={(e) => handleFilterChange("fromDate", e.target.value)}
           />
         </div>

          {/* To Date */}
          <div className="md:col-span-3">
           <Input
              type="date"
              className="h-9 bg-white border-gray-300"
              value={filters.toDate}
              onChange={(e) => handleFilterChange("toDate", e.target.value)}
           />
         </div>

        {/* Buttons */}
        <div className="md:col-span-3 flex gap-2">
            <Button
                size="sm"
                className="bg-[#C04000] hover:bg-[#A03000] text-white px-6 h-9 rounded-md"
            >
                Search
            </Button>
            <Button
                size="sm"
                onClick={handleClear}
                className="bg-[#C04000] hover:bg-[#A03000] text-white px-6 h-9 rounded-md"
            >
                Clear
            </Button>
        </div>
        
        {/* Total Count */}
        <div className="md:col-span-3 flex justify-end pb-2">
             <span className="text-sm text-gray-600 font-medium">Total : 1012</span>
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
        <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#E6FFCC] hover:bg-[#E6FFCC]">
                <TableRow className="border-b border-gray-100 hover:bg-[#E6FFCC]">
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Sr. No.</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Clinic Name</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Patient Code</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Patient Name</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Invoice No.</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Payment Date</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Revenue Amount</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Payment Mode</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Transaction No.</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row) => (
                    <TableRow key={row.id} className="border-b border-gray-50 hover:bg-gray-50 text-xs">
                      <TableCell className="py-2 text-gray-600">{row.id}</TableCell>
                      <TableCell className="py-2 text-gray-600 uppercase">{row.clinicName}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.patientCode}</TableCell>
                      <TableCell className="py-2 text-gray-600 uppercase">{row.patientName}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.invoiceNo}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.paymentDate}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.revenueAmount}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.paymentMode}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.transactionNo}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
      </div>
      
       {/* Footer / Pagination */}
       <div className="flex justify-between items-center pt-2">
            <Button variant="outline" size="icon" className="h-8 w-8 text-green-700 border-green-700 hover:bg-green-50">
                <FileSpreadsheet className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-1">
                 <Button variant="ghost" size="sm" className="h-8 text-blue-500 font-normal hover:bg-transparent px-1">
                    12345678910...&gt;&gt;
                 </Button>
            </div>
       </div>
    </div>
  );
}
