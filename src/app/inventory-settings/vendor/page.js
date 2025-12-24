"use client";

import React, { useState } from "react";
import { Settings, Plus, Search, Pencil, Trash2, FileSpreadsheet } from "lucide-react";
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
import { cn } from "@/lib/utils";

export default function Vendor() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for Vendor
  const tableData = [
    {
        id: 1,
        clinicName: "Nanganallur",
        vendorType: "Chair Repair",
        vendorName: "APP DENTAL EQUIPMENTS",
        mobileNo: "9385854891"
    },
    {
        id: 2,
        clinicName: "Nanganallur",
        vendorType: "Lab Bill",
        vendorName: "ORTHODENTCO",
        mobileNo: "9944223424"
    },
    {
        id: 3,
        clinicName: "Nanganallur",
        vendorType: "Lab Bill",
        vendorName: "VINAYAGA",
        mobileNo: "7550066982"
    },
    {
        id: 4,
        clinicName: "Nanganallur",
        vendorType: "Chair Repair",
        vendorName: "BHASKAR",
        mobileNo: "9894828083"
    },
    {
        id: 5,
        clinicName: "Nanganallur",
        vendorType: "Medical",
        vendorName: "MASOOD LASER UNIT",
        mobileNo: "9884313950"
    },
    {
        id: 6,
        clinicName: "thanisandra",
        vendorType: "Courier",
        vendorName: "porter app",
        mobileNo: "8655401658"
    },
    {
        id: 7,
        clinicName: "thanisandra",
        vendorType: "Water Refill",
        vendorName: "thanisandra water tanker",
        mobileNo: "9702057226"
    },
    {
        id: 8,
        clinicName: "MULUND",
        vendorType: "Incentive",
        vendorName: "Mahek",
        mobileNo: "7700011473"
    },
    {
        id: 9,
        clinicName: "Vasai west",
        vendorType: "Rent",
        vendorName: "mamta",
        mobileNo: "9067895507"
    },
    {
        id: 10,
        clinicName: "Navrangpura",
        vendorType: "scanner",
        vendorName: "unicorn lab",
        mobileNo: "7405707811"
    }
  ];

  return (
    <div className="p-6 bg-white dark:bg-gray-900 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
        <Settings className="w-5 h-5 text-red-500" />
        <h1 className="text-lg font-bold text-red-500 uppercase tracking-wide">
          VENDOR
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="flex-1 w-full md:max-w-xl flex gap-2 items-center">
            <Input
                placeholder="Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 flex-1"
            />
             <Button className="bg-[#D35400] hover:bg-[#A04000] text-white px-6 font-medium shadow-sm transition-all whitespace-nowrap">
                Search
            </Button>
            <Button className="bg-[#0e7490] hover:bg-[#0891b2] text-white px-6 font-medium shadow-sm transition-all whitespace-nowrap">
                Add New
            </Button>
        </div>
        
         <div className="text-sm text-gray-500">
            Total :
        </div>
      </div>

      {/* Table */}
       <div className="border border-gray-200 dark:border-gray-700 rounded-t-lg overflow-hidden overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#E8F8F5] dark:bg-gray-800">
            <TableRow className="hover:bg-[#E8F8F5] dark:hover:bg-gray-700/50 border-gray-200 dark:border-gray-700">
              <TableHead className="font-bold text-gray-700 dark:text-gray-300 w-[60px]">Sr. No.</TableHead>
              <TableHead className="font-bold text-gray-700 dark:text-gray-300">Clinic Name</TableHead>
              <TableHead className="font-bold text-gray-700 dark:text-gray-300">Vendor Type</TableHead>
              <TableHead className="font-bold text-gray-700 dark:text-gray-300">Vendor Name</TableHead>
              <TableHead className="font-bold text-gray-700 dark:text-gray-300">Mobile No</TableHead>
              <TableHead className="font-bold text-gray-700 dark:text-gray-300 w-[100px] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id} className="border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800/50">
                <TableCell className="dark:text-gray-300">{row.id}</TableCell>
                <TableCell className="dark:text-gray-300">{row.clinicName}</TableCell>
                <TableCell className="dark:text-gray-300">{row.vendorType}</TableCell>
                <TableCell className="dark:text-gray-300">{row.vendorName}</TableCell>
                <TableCell className="dark:text-gray-300">{row.mobileNo}</TableCell>
                <TableCell className="dark:text-gray-300">
                    <div className="flex items-center justify-center gap-4">
                        <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-600 hover:text-blue-600">
                            <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-4 w-4 text-gray-600 hover:text-red-600">
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

       {/* Footer / Pagination */}
       <div className="flex justify-end items-center pt-2">
          <div className="flex gap-2 text-sm text-blue-600 dark:text-blue-400">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join('').split('').map((num, i) => (
                <span key={i} className="cursor-pointer hover:underline p-1">
                 {/* This mock pagination is just to mimic the look of the screenshot, simplified */}
                </span>
            ))}
             <span className="cursor-pointer hover:underline p-1">12345678910... &gt;&gt;</span>
          </div>
        </div>
    </div>
  );
}
