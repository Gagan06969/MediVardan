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

export default function PaymentModeClinicReportPage() {
  const [clinicName, setClinicName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [reportData, setReportData] = useState([
    { id: 1, month: "January", cash: "7564177.37", cheque: "0.00", debitCard: "3187399.99", creditCard: "1147875.00", upi: "13293033.33", bajaj: "1995399.99", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1450200.00", shopseHDFC: "1241000.00", shopseCredit: "2961000.00", shopseAmex: "132000.00", neft: "328158.99", razorpay: "1247096.01", savein: "4427086.66", unofin: "3027799.99", fibe: "4949031.51", flexUpi: "0.00", medibuddy: "0.00", total: "46951236.84" },
    { id: 2, month: "February", cash: "6847592.04", cheque: "0.00", debitCard: "1982520.99", creditCard: "1033580.00", upi: "13226507.85", bajaj: "1834433.33", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1891700.00", shopseHDFC: "1291000.00", shopseCredit: "3598817.51", shopseAmex: "293500.00", neft: "683000.00", razorpay: "1219304.00", savein: "5703109.00", unofin: "0.00", fibe: "4935337.35", flexUpi: "0.00", medibuddy: "0.00", total: "44550402.07" },
    { id: 3, month: "March", cash: "7804950.87", cheque: "0.00", debitCard: "1723236.70", creditCard: "1977288.00", upi: "14244699.58", bajaj: "1881520.00", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1882200.33", shopseHDFC: "928500.00", shopseCredit: "3645500.00", shopseAmex: "385000.00", neft: "329071.99", razorpay: "1183703.67", savein: "8356255.58", unofin: "0.00", fibe: "7061473.11", flexUpi: "0.00", medibuddy: "0.00", total: "51201399.83" },
    { id: 4, month: "April", cash: "9032934.05", cheque: "0.00", debitCard: "1476287.97", creditCard: "1695522.99", upi: "14771818.71", bajaj: "2240600.00", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1415500.00", shopseHDFC: "611500.00", shopseCredit: "3344500.00", shopseAmex: "199000.00", neft: "261800.01", razorpay: "2469139.99", savein: "5869566.66", unofin: "0.00", fibe: "4436955.56", flexUpi: "0.00", medibuddy: "0.00", total: "47825125.94" },
    { id: 5, month: "May", cash: "7860446.28", cheque: "0.00", debitCard: "1569435.00", creditCard: "3487234.99", upi: "15466815.54", bajaj: "2575533.34", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "2074000.00", shopseHDFC: "1558000.00", shopseCredit: "3796500.00", shopseAmex: "141800.00", neft: "979800.00", razorpay: "1385908.98", savein: "8940700.00", unofin: "0.00", fibe: "3765041.09", flexUpi: "0.00", medibuddy: "0.00", total: "53601215.22" },
    { id: 6, month: "June", cash: "8084901.01", cheque: "0.00", debitCard: "1707782.99", creditCard: "968901.00", upi: "16324961.45", bajaj: "1309333.34", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1762400.01", shopseHDFC: "1227500.00", shopseCredit: "3196000.01", shopseAmex: "35000.00", neft: "895399.99", razorpay: "1923153.01", savein: "9060939.10", unofin: "0.00", fibe: "4774798.87", flexUpi: "0.00", medibuddy: "0.00", total: "51431070.78" },
    { id: 7, month: "July", cash: "8710080.01", cheque: "0.00", debitCard: "1624090.00", creditCard: "2309707.88", upi: "19147092.50", bajaj: "2272000.00", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1721000.00", shopseHDFC: "1030000.01", shopseCredit: "4343500.00", shopseAmex: "414000.00", neft: "482000.00", razorpay: "2549956.01", savein: "10520763.43", unofin: "0.00", fibe: "5725261.14", flexUpi: "0.00", medibuddy: "0.00", total: "60849450.98" },
    { id: 8, month: "August", cash: "7800022.69", cheque: "100000.00", debitCard: "1893584.00", creditCard: "2398531.00", upi: "18815314.62", bajaj: "1695280.35", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1809000.00", shopseHDFC: "1017000.00", shopseCredit: "3338500.00", shopseAmex: "498500.00", neft: "1094945.28", razorpay: "1512451.99", savein: "7111388.88", unofin: "0.00", fibe: "4944128.99", flexUpi: "0.00", medibuddy: "0.00", total: "54028647.80" },
    { id: 9, month: "September", cash: "9573885.50", cheque: "135000.00", debitCard: "1689646.68", creditCard: "2385421.00", upi: "18861814.43", bajaj: "2201099.98", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1434000.00", shopseHDFC: "1079000.00", shopseCredit: "5322666.68", shopseAmex: "445000.00", neft: "640000.00", razorpay: "1882161.31", savein: "9075327.67", unofin: "0.00", fibe: "7257327.48", flexUpi: "0.00", medibuddy: "0.00", total: "61982330.73" },
    { id: 10, month: "October", cash: "9681058.00", cheque: "40000.00", debitCard: "2327819.00", creditCard: "2575204.99", upi: "17111056.96", bajaj: "2035959.33", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1994950.00", shopseHDFC: "1337337.00", shopseCredit: "4931500.00", shopseAmex: "503000.00", neft: "605000.00", razorpay: "2482305.67", savein: "6509265.80", unofin: "0.00", fibe: "6557418.77", flexUpi: "0.00", medibuddy: "0.00", total: "58691895.52" },
    { id: 11, month: "November", cash: "9325826.64", cheque: "0.00", debitCard: "2083077.00", creditCard: "3070684.00", upi: "16737973.21", bajaj: "2933333.34", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1962000.00", shopseHDFC: "1023250.00", shopseCredit: "3274000.00", shopseAmex: "667000.00", neft: "862250.00", razorpay: "1784367.02", savein: "6494962.66", unofin: "0.00", fibe: "8644529.17", flexUpi: "0.00", medibuddy: "0.00", total: "56763253.04" },
    { id: 12, month: "December", cash: "6003914.96", cheque: "453000.00", debitCard: "1940289.00", creditCard: "1691666.01", upi: "10042404.03", bajaj: "1356406.40", creditFair: "0.00", liquid: "0.00", shopse: "0.00", shopseDebit: "1518333.33", shopseHDFC: "510000.00", shopseCredit: "2397000.00", shopseAmex: "517000.00", neft: "1141000.00", razorpay: "751731.00", savein: "3479699.99", unofin: "0.00", fibe: "3191028.23", flexUpi: "0.00", medibuddy: "0.00", total: "35073873.75" },
  ]);

  const handleSearch = () => {
    console.log("Searching with:", { clinicName, doctorName, year, month, fromDate, toDate });
  };

  const handleExport = () => {
    exportToExcel(reportData, "Payment_Mode_Clinic_Report");
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
          PAYMENT COLLECTION REPORT
        </h1>
      </div>

       {/* Filters */}
       <div className="flex flex-col space-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4 items-end">
             {/* Clinic Name */}
            <div className="w-full md:w-1/4 space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">Clinic Name</label>
                <Select value={clinicName} onValueChange={setClinicName}>
                    <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                        <SelectValue placeholder="-- Select Clinic --" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="adajan">ADAJAN</SelectItem>
                         <SelectItem value="adyar">ADYAR</SelectItem>
                    </SelectContent>
                </Select>
            </div>

             {/* Doctor Name */}
             <div className="w-full md:w-1/4 space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase">Doctor Name</label>
                <Input
                    type="text"
                    placeholder="Doctor Name"
                    value={doctorName}
                    onChange={(e) => setDoctorName(e.target.value)}
                    className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700"
                />
            </div>
             {/* Year */}
             <div className="w-full md:w-1/4 space-y-1">
                 <label className="text-xs font-semibold text-gray-500 uppercase">Year</label>
                 <Select value={year} onValueChange={setYear}>
                    <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                    </SelectContent>
                </Select>
            </div>

              {/* Month */}
             <div className="w-full md:w-1/4 space-y-1">
                 <label className="text-xs font-semibold text-gray-500 uppercase">Month</label>
                 <Select value={month} onValueChange={setMonth}>
                    <SelectTrigger className="h-10 border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700">
                        <SelectValue placeholder="-- Select Month --" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="january">January</SelectItem>
                        <SelectItem value="february">February</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
        
        {/* Row 2 */}
         <div className="flex flex-col md:flex-row gap-4 items-end">
             {/* From Date */}
            <div className="w-full md:w-1/4 space-y-1">
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
            <div className="w-full md:w-1/4 space-y-1">
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
      </div>

       {/* Total Count */}
       <div className="flex justify-end pr-2">
          <span className="font-semibold text-gray-600 dark:text-gray-400 text-sm">Total : 622949402.50</span>
       </div>

      {/* Table */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-t-lg overflow-x-auto">
        <Table className="w-full">
          <TableHeader className="bg-[#e6ffcc] dark:bg-[#e6ffcc]/20">
            <TableRow className="hover:bg-transparent">
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Month</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Cash</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Cheque</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Debit Card</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Credit Card</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">UPI</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Bajaj Finance</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Credit Fair</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Liquid Loans</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Shopse</TableHead>
              <TableHead className="min-w-[120px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Shopse Debit Card</TableHead>
              <TableHead className="min-w-[120px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Shopse HDFC & Citi</TableHead>
              <TableHead className="min-w-[120px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Shopse Credit Card</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Shopse Amex</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">NEFT</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Razorpay</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">SaveIn</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">Unofin</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">FIBE</TableHead>
              <TableHead className="min-w-[80px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">FLEX UPI</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 border-r border-white dark:border-gray-600">MediBuddy</TableHead>
              <TableHead className="min-w-[100px] font-bold text-gray-800 dark:text-gray-200 text-center">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((row) => (
              <TableRow key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700">
                <TableCell className="font-medium text-blue-500 border-r border-gray-200 dark:border-gray-700 py-3">{row.month}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.cash}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.cheque}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.debitCard}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.creditCard}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.upi}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.bajaj}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.creditFair}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.liquid}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.shopse}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.shopseDebit}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.shopseHDFC}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.shopseCredit}</TableCell>
                 <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.shopseAmex}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.neft}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.razorpay}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.savein}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.unofin}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.fibe}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.flexUpi}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 py-3">{row.medibuddy}</TableCell>
                <TableCell className="font-bold text-gray-800 dark:text-gray-200 py-3 text-center">{row.total}</TableCell>
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
