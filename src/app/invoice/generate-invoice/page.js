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
import { Settings } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function GenerateInvoicePage() {
  const [formData, setFormData] = useState({
    patientName: "",
    clinicName: "",
    doctorName: "",
    paymentDate: "2025-12-23",
    treatmentType: "Other",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full p-6 space-y-8 min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Settings className="w-5 h-5 text-red-500 animate-spin-slow" />
        <h1 className="text-xl font-bold text-red-500 uppercase tracking-wide">
          GENERATE INVOICE
        </h1>
      </div>

      {/* Form Section */}
      <div className="space-y-6">
        {/* Row 1: Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Patient Name */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-gray-700">Patient Name</Label>
            <Input
              className="h-10 bg-white border-gray-300"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={(e) => handleInputChange("patientName", e.target.value)}
            />
          </div>

          {/* Clinic Name */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-gray-700">Clinic Name</Label>
            <Select
              value={formData.clinicName}
              onValueChange={(val) => handleInputChange("clinicName", val)}
            >
              <SelectTrigger className="h-10 bg-white border-gray-300">
                <SelectValue placeholder="-- Select Clinic --" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dehradun">Dehradun</SelectItem>
                <SelectItem value="mumabi">Mumbai</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Doctor Name */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-gray-700">Doctor Name</Label>
            <Select
              value={formData.doctorName}
              onValueChange={(val) => handleInputChange("doctorName", val)}
            >
              <SelectTrigger className="h-10 bg-white border-gray-300">
                <SelectValue placeholder="--- Select ---" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                <SelectItem value="dr-jones">Dr. Jones</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Payment Date */}
          <div className="space-y-2">
            <Label className="text-xs font-semibold text-gray-700">Payment Date</Label>
            <Input
              type="date"
              className="h-10 bg-slate-100 border-gray-300" 
              value={formData.paymentDate}
              onChange={(e) => handleInputChange("paymentDate", e.target.value)}
            />
          </div>
        </div>

        {/* Row 2: Treatment Type */}
        <div className="space-y-2">
           <Label className="text-xs font-semibold text-gray-700">Treatment Type</Label>
           <RadioGroup 
                defaultValue="Other" 
                className="flex items-center gap-6"
                onValueChange={(val) => handleInputChange("treatmentType", val)}
            >
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Aligner" id="r1" className="text-blue-600 border-gray-400" />
                    <Label htmlFor="r1" className="font-normal text-gray-700">Aligner</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="r2" className="text-blue-600 border-blue-600" />
                    <Label htmlFor="r2" className="font-normal text-gray-700">Other</Label>
                </div>
            </RadioGroup>
        </div>
      </div>

      {/* Totals Section */}
      <div className="grid grid-cols-4 gap-4 py-8">
           <div>
               <p className="text-xs font-semibold text-gray-600 uppercase">TOTAL COST (₹)</p>
           </div>
           <div>
               <p className="text-xs font-semibold text-gray-600 uppercase">TOTAL DISCOUNT (₹)</p>
           </div>
           <div>
               <p className="text-xs font-semibold text-gray-600 uppercase">TOTAL TAX (₹)</p>
           </div>
           <div>
               <p className="text-xs font-semibold text-gray-600 uppercase">GRAND TOTAL(₹)</p>
           </div>
      </div>

      {/* Footer / Submit Button */}
      <div className="flex justify-center pt-4 border-t border-gray-100 bg-gray-50/50 -mx-6 px-6 pb-6">
        <Button 
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-2 h-10 rounded shadow-sm"
        >
            Submit
        </Button>
      </div>
    </div>
  );
}
