"use client";

import React, { useState } from "react";
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
import { FileSpreadsheet } from "lucide-react";

export default function BajajSchemeInvoicePage() {
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
      clinicName: "Secunderabad",
      patientCode: "P113614",
      patientName: "Nithin Javvaji",
      invoiceNo: "TEL003352526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "72,450.00",
      downpayment: "8,050.00",
      approvedLoanAmount: "80,500.00",
      schemeName: "10/1",
    },
    {
      id: 2,
      clinicName: "Secunderabad",
      patientCode: "P113614",
      patientName: "Nithin Javvaji",
      invoiceNo: "TEL003342526",
      paymentDate: "17-Dec-2025",
      revenueAmount: "31,050.00",
      downpayment: "3,450.00",
      approvedLoanAmount: "34,500.00",
      schemeName: "10/1",
    },
    {
      id: 3,
      clinicName: "Pimpri",
      patientCode: "P113241",
      patientName: "virendra chavan",
      invoiceNo: "MAH000832526",
      paymentDate: "12-Dec-2025",
      revenueAmount: "28,000.00",
      downpayment: "8,297.00",
      approvedLoanAmount: "36,297.00",
      schemeName: "10/2",
    },
    {
      id: 4,
      clinicName: "Pimpri",
      patientCode: "P113289",
      patientName: "sonali kadam",
      invoiceNo: "MAH000802526",
      paymentDate: "10-Dec-2025",
      revenueAmount: "40,000.00",
      downpayment: "10,000.00",
      approvedLoanAmount: "50,000.00",
      schemeName: "10/2",
    },
    {
      id: 5,
      clinicName: "New Yelhanka",
      patientCode: "P113783",
      patientName: "P HARSHVARDHAN NAYAK",
      invoiceNo: "KAR006242526",
      paymentDate: "20-Dec-2025",
      revenueAmount: "45,000.00",
      downpayment: "5,000.00",
      approvedLoanAmount: "50,000.00",
      schemeName: "10/1",
    },
    {
      id: 6,
      clinicName: "New Yelhanka",
      patientCode: "P113758",
      patientName: "PARTHA Chakrabarti",
      invoiceNo: "KAR005902526",
      paymentDate: "20-Dec-2025",
      revenueAmount: "1,17,000.00",
      downpayment: "13,000.00",
      approvedLoanAmount: "1,30,000.00",
      schemeName: "10/1",
    },
    {
      id: 7,
      clinicName: "New Yelhanka",
      patientCode: "P113758",
      patientName: "PARTHA Chakrabarti",
      invoiceNo: "KAR005902526",
      paymentDate: "20-Dec-2025",
      revenueAmount: "90,000.00",
      downpayment: "10,000.00",
      approvedLoanAmount: "1,00,000.00",
      schemeName: "10/1",
    },
    {
      id: 8,
      clinicName: "Mysore",
      patientCode: "P113390",
      patientName: "NAGARATHNA S",
      invoiceNo: "KAR001092526",
      paymentDate: "12-Dec-2025",
      revenueAmount: "54,000.00",
      downpayment: "6,000.00",
      approvedLoanAmount: "60,000.00",
      schemeName: "10/1",
    },
  ];

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const clearFilters = () => {
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
        BAJAJ SCHEME INVOICE REPORT
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
              <SelectItem value="secunderabad">Secunderabad</SelectItem>
              <SelectItem value="pimpri">Pimpri</SelectItem>
              <SelectItem value="new-yelhanka">New Yelhanka</SelectItem>
              <SelectItem value="mysore">Mysore</SelectItem>
              <SelectItem value="ambernath">Ambernath</SelectItem>
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
            onClick={clearFilters}
            className="bg-[#C04000] hover:bg-[#A03000] text-white px-6 h-9 rounded-md"
          >
            Clear
          </Button>
        </div>

        {/* Total Count */}
        <div className="md:col-span-3 flex justify-end pb-2">
          <span className="text-sm text-gray-600 font-medium">Total : 19</span>
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
                <TableHead className="text-xs font-bold text-gray-700 h-10">Downpayment</TableHead>
                <TableHead className="text-xs font-bold text-gray-700 h-10">Approved Loan Amount</TableHead>
                <TableHead className="text-xs font-bold text-gray-700 h-10">Scheme Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((row) => (
                <TableRow key={row.id} className="border-b border-gray-50 hover:bg-gray-50 text-xs">
                  <TableCell className="py-2 text-gray-600">{row.id}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.clinicName}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.patientCode}</TableCell>
                  <TableCell className="py-2 text-gray-600 uppercase">{row.patientName}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.invoiceNo}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.paymentDate}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.revenueAmount}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.downpayment}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.approvedLoanAmount}</TableCell>
                  <TableCell className="py-2 text-gray-600">{row.schemeName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Footer / Pagination */}
      <div className="flex justify-between items-center pt-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-green-700 border-green-700 hover:bg-green-50"
        >
          <FileSpreadsheet className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-blue-500 font-normal hover:bg-transparent px-1"
          >
            12345678910...&gt;&gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
