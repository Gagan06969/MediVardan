"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileSpreadsheet, Settings } from "lucide-react";

export default function ChequeInvoicePage() {
  const [filters, setFilters] = useState({
    patientName: "",
    fromPaymentDate: "",
    toPaymentDate: "",
  });

  // Mock data based on the screenshot
  const mockData = [
    { id: 1, invoiceNo: "INV173797", clinic: "Borivali", patient: "BHARAT JOSHI", bank: "Central Bank of India", branch: "DAHISAR", ifsc: "CBIN0282739", chequeNo: "771176", date: "30-Dec-2026", amount: "20000.00", clearDate: "", status: "Pending" },
    { id: 2, invoiceNo: "INV173797", clinic: "Borivali", patient: "BHARAT JOSHI", bank: "Central Bank of India", branch: "DAHISAR", ifsc: "CBIN0282739", chequeNo: "771179", date: "03-Mar-2026", amount: "20000.00", clearDate: "", status: "Pending" },
    { id: 3, invoiceNo: "INV173797", clinic: "Borivali", patient: "BHARAT JOSHI", bank: "Central Bank of India", branch: "DAHISAR", ifsc: "CBIN0282739", chequeNo: "771175", date: "30-Dec-2025", amount: "20000.00", clearDate: "", status: "Pending" },
    { id: 4, invoiceNo: "INV191123", clinic: "KALYAN NAGAR", patient: "Rupa S Poojary", bank: "DBS BANK", branch: "Shivaji Nagar", ifsc: "DBSS0IN0162", chequeNo: "000359", date: "25-Dec-2025", amount: "25000.00", clearDate: "", status: "Pending" },
    { id: 5, invoiceNo: "INV191123", clinic: "KALYAN NAGAR", patient: "Rupa S Poojary", bank: "DBS BANK", branch: "Shivaji Nagar", ifsc: "DBSS0IN0162", chequeNo: "000358", date: "15-Dec-2025", amount: "25000.00", clearDate: "", status: "Pending" },
    { id: 6, invoiceNo: "INV192381", clinic: "Borivali", patient: "Reginald Colacor", bank: "Bassein catholic co operative Bank", branch: "Mandepeshwar", ifsc: "BACB0000028", chequeNo: "100014", date: "15-Dec-2025", amount: "18000.00", clearDate: "17-Dec-2025", status: "Cheque Clear" },
    { id: 7, invoiceNo: "MAH002642526", clinic: "Borivali", patient: "Suresh Desai", bank: "Greater bank", branch: "Mira road", ifsc: "GBCB0000023", chequeNo: "315887", date: "15-Dec-2025", amount: "90000.00", clearDate: "18-Dec-2025", status: "Cheque Clear" },
    { id: 8, invoiceNo: "INV186017", clinic: "Dombivali East", patient: "SHWETA MHATRE", bank: "BANK OF BARODA", branch: "NILJE GURAVALI", ifsc: "BARB0NILJEX", chequeNo: "000022", date: "15-Dec-2025", amount: "25000.00", clearDate: "19-Dec-2025", status: "Cheque Clear" },
    { id: 9, invoiceNo: "INV147856", clinic: "Mysore", patient: "VEENA INNANJI", bank: "STATE BANK OF INDIA", branch: "SRIRAMPURA 2ND STAGE", ifsc: "SBIN0017797", chequeNo: "797011", date: "13-Dec-2025", amount: "10000.00", clearDate: "18-Dec-2025", status: "Cheque Clear" },
    { id: 10, invoiceNo: "GUJ001812526", clinic: "Shahibaug", patient: "Bhawarlal Doshi", bank: "icici bank", branch: "shahibaug branch", ifsc: "ICIC0000294", chequeNo: "023227", date: "13-Dec-2025", amount: "10000.00", clearDate: "15-Dec-2025", status: "Cheque Clear" },
  ];

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full p-4 space-y-6 min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="flex items-center gap-2">
         <Settings className="w-5 h-5 text-red-500 animate-spin-slow" />
         <h1 className="text-xl font-bold text-red-500 uppercase tracking-wide">
            CHEQUE INVOICE
         </h1>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-white dark:bg-gray-900 rounded-lg">
        
        {/* Patient Name */}
        <div className="md:col-span-3 space-y-1">
          <Input
             className="h-9 bg-white border-gray-300"
             placeholder="Patient Name"
             value={filters.patientName}
             onChange={(e) => handleFilterChange("patientName", e.target.value)}
          />
        </div>

         {/* From Date */}
         <div className="md:col-span-3">
          <Input
             type="date"
             className="h-9 bg-white border-gray-300"
             placeholder="From Payment Date"
             value={filters.fromPaymentDate}
             onChange={(e) => handleFilterChange("fromPaymentDate", e.target.value)}
          />
        </div>

         {/* To Date */}
         <div className="md:col-span-3">
          <Input
             type="date"
             className="h-9 bg-white border-gray-300"
             placeholder="To Payment Date"
             value={filters.toPaymentDate}
             onChange={(e) => handleFilterChange("toPaymentDate", e.target.value)}
          />
        </div>

        {/* Search Button */}
        <div className="md:col-span-3 flex gap-2">
            <Button
                size="sm"
                className="bg-[#C04000] hover:bg-[#A03000] text-white px-6 h-9 rounded-md"
            >
                Search
            </Button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-gray-200 rounded-sm overflow-hidden bg-white shadow-sm">
        <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#E6FFCC] hover:bg-[#E6FFCC]">
                <TableRow className="border-b border-gray-100 hover:bg-[#E6FFCC]">
                  <TableHead className="text-xs font-bold text-gray-700 h-10 w-12">Sr. No.</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Invoice No.</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Clinic Name</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Patient Name</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Bank Name</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Branch Name</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">IFSC</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Cheque No</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Date</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Amount</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Cheque Clear Date</TableHead>
                  <TableHead className="text-xs font-bold text-gray-700 h-10">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row, index) => (
                    <TableRow key={row.id} className="border-b border-gray-50 hover:bg-gray-50 text-xs">
                      <TableCell className="py-2 text-gray-600">{row.id}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.invoiceNo}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.clinic}</TableCell>
                      <TableCell className="py-2 text-gray-600 uppercase">{row.patient}</TableCell>
                      <TableCell className="py-2 text-gray-600 uppercase">{row.bank}</TableCell>
                      <TableCell className="py-2 text-gray-600 uppercase">{row.branch}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.ifsc}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.chequeNo}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.date}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.amount}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.clearDate}</TableCell>
                      <TableCell className="py-2 text-gray-600">{row.status}</TableCell>
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
