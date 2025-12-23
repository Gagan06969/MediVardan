"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Settings, FileSpreadsheet } from "lucide-react";
import { exportToExcel } from "@/utils/exportToExcel";
import CustomPagination from "@/components/ui/custom-pagination";

export default function PurchaseOrderPage() {
  const [vendorName, setVendorName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data matching the screenshot
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNo: "ORD4968",
      vendorName: "PROMIS DENTAL SYSTEM",
      orderDate: "01-Jan-2025",
      status: "Received",
    },
    {
      id: 2,
      orderNo: "ORD5814",
      vendorName: "Nidhi Dental Solution",
      orderDate: "11-Oct-2024",
      status: "Received",
    },
    {
      id: 3,
      orderNo: "ORD3123",
      vendorName: "A-Z Dental World",
      orderDate: "02-Oct-2024",
      status: "Received",
    },
    {
      id: 4,
      orderNo: "ORD7594",
      vendorName: "PROMIS DENTAL SYSTEM",
      orderDate: "03-Aug-2024",
      status: "Received",
    },
    {
      id: 5,
      orderNo: "ORD3068",
      vendorName: "PROMIS DENTAL SYSTEM",
      orderDate: "23-Aug-2024",
      status: "Received",
    },
    {
      id: 6,
      orderNo: "ORD9755",
      vendorName: "PROMIS DENTAL SYSTEM",
      orderDate: "17-Aug-2024",
      status: "Received",
    },
    {
      id: 7,
      orderNo: "ORD3393",
      vendorName: "A-Z Dental World",
      orderDate: "31-Jul-2024",
      status: "Received",
    },
    {
      id: 8,
      orderNo: "ORD7751",
      vendorName: "PROMIS DENTAL SYSTEM",
      orderDate: "25-Jul-2024",
      status: "Received",
    },
    {
      id: 9,
      orderNo: "ORD6749",
      vendorName: "OHI MARKETING",
      orderDate: "26-Jul-2024",
      status: "Received",
    },
    {
      id: 10,
      orderNo: "ORD9253",
      vendorName: "A-Z Dental World",
      orderDate: "24-Jul-2024",
      status: "Received",
    },
    {
      id: 11,
      orderNo: "ORD4163",
      vendorName: "SHREEYASH MEDICOS",
      orderDate: "23-Jul-2024",
      status: "Received",
    },
    {
      id: 12,
      orderNo: "ORD8666",
      vendorName: "SHREEYASH MEDICOS",
      orderDate: "23-Jul-2024",
      status: "Received",
    },
    {
      id: 13,
      orderNo: "ORD2119",
      vendorName: "SHREEYASH MEDICOS",
      orderDate: "22-Jul-2024",
      status: "Received",
    },
    {
      id: 14,
      orderNo: "ORD8921",
      vendorName: "SHREEYASH MEDICOS",
      orderDate: "18-Jul-2024",
      status: "Received",
    },
    {
      id: 15,
      orderNo: "ORD9601",
      vendorName: "A-Z Dental World",
      orderDate: "15-Jul-2024",
      status: "Received",
    },
    {
      id: 16,
      orderNo: "ORD8050",
      vendorName: "SHREEYASH MEDICOS",
      orderDate: "15-Jul-2024",
      status: "Received",
    },
    {
      id: 17,
      orderNo: "ORD4438",
      vendorName: "Nidhi Dental Solution",
      orderDate: "13-Jul-2024",
      status: "Received",
    },
    {
      id: 18,
      orderNo: "ORD6695",
      vendorName: "Dynamic Healthcare",
      orderDate: "12-Jul-2024",
      status: "Received",
    },
    {
      id: 19,
      orderNo: "ORD3791",
      vendorName: "PROMIS DENTAL SYSTEM",
      orderDate: "12-Jul-2024",
      status: "Incomplete",
    },
  ]);

  const handleSearch = () => {
    console.log("Searching purchase orders:", { vendorName, fromDate, toDate });
  };

  const handleExport = () => {
    exportToExcel(orders, "Purchase_Order_Report");
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <Settings className="w-4 h-4 text-red-600" />
        </div>
        <h1 className="text-xl font-bold text-red-600 dark:text-red-500 uppercase">
          PURCHASE ORDER
        </h1>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-end bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        
        {/* Vendor Name */}
        <div className="w-full md:w-1/4 space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">
             Vendor Name
          </label>
          <Input
            placeholder="Vendor Name"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="h-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
          />
        </div>

        {/* From Date */}
        <div className="w-full md:w-1/4 space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            From Date
          </label>
          <Input
            type="date"
            placeholder="From Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="h-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
          />
        </div>

        {/* To Date */}
        <div className="w-full md:w-1/4 space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">
            To Date
          </label>
          <Input
            type="date"
            placeholder="To Date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="h-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 w-full md:w-auto">
          <Button
            onClick={handleSearch}
            className="bg-[#D35400] hover:bg-[#ba4a00] text-white px-6 h-10 shadow-sm transition-all"
          >
            Search
          </Button>
          <Button className="bg-[#0056b3] hover:bg-[#004494] text-white px-4 h-10 shadow-sm transition-all">
            Add New Order
          </Button>
        </div>
      </div>

      {/* Total Count */}
      <div className="flex justify-end pr-2">
         <span className="font-semibold text-gray-600 dark:text-gray-400 text-sm">Total : {orders.length}</span>
      </div>

      {/* Table */}
       <div className="border border-gray-200 dark:border-gray-700 rounded-t-lg overflow-hidden overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#e6ffcc] dark:bg-[#e6ffcc]/20">
            <TableRow className="hover:bg-transparent border-gray-200 dark:border-gray-700">
              <TableHead className="w-[60px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Sr. No.
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Order No
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">
                Vendor Name
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600 text-center">
                Order Date
              </TableHead>
              <TableHead className="font-bold text-gray-800 dark:text-gray-200 text-center">
                Order Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((order, index) => (
              <TableRow
                key={order.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
              >
                <TableCell className="font-medium text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {indexOfFirstItem + index + 1}
                </TableCell>
                <TableCell className="border-r border-gray-200 dark:border-gray-700 py-3">
                  <Link href="#" className="text-blue-500 hover:underline font-medium dark:text-blue-400">
                    {order.orderNo}
                  </Link>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3 uppercase text-sm">
                  {order.vendorName}
                </TableCell>
                <TableCell className="text-center text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">
                  {order.orderDate}
                </TableCell>
                <TableCell className="text-center text-gray-600 dark:text-gray-300 py-3">
                  {order.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

       {/* Footer / Pagination / Export */}
       <div className="flex justify-between items-center mt-4">
         {/* Excel Export Icon */}
         <div className="cursor-pointer" onClick={handleExport} title="Download Excel">
           <div className="w-8 h-8 flex items-center justify-center bg-green-700 hover:bg-green-800 text-white rounded shadow transition-colors">
            <FileSpreadsheet className="w-5 h-5" />
           </div>
        </div>

        {/* Pagination component */}
        <CustomPagination 
            totalItems={orders.length} 
            itemsPerPage={itemsPerPage} 
            currentPage={currentPage} 
            onPageChange={setCurrentPage} 
        />
        </div>
    </div>
  );
}
