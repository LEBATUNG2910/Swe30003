import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Phone,
  Mail,
  Shield,
  Award,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Prescription() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const processSteps = [
    {
      step: 1,
      title: "Upload Prescription",
      description: "Take photo or upload file",
      status: "current",
    },
    {
      step: 2,
      title: "Pharmacist Verification",
      description: "Review and consultation",
      status: "pending",
    },
    {
      step: 3,
      title: "Medicine Preparation",
      description: "Packaging and delivery",
      status: "pending",
    },
  ];

  const prescriptionHistory = [
    {
      id: 1,
      number: "RXO",
      status: "Approved",
      date: "2024-01-15",
      doctor: "Dr. Nguyen Van A",
      price: 245000,
    },
    {
      id: 2,
      number: "RX002",
      status: "Pending",
      date: "2024-01-10",
      doctor: "Dr. Tran Thi B",
      price: 180000,
    },
    {
      id: 3,
      number: "RX003",
      status: "Rejected",
      date: "2024-01-05",
      doctor: "Dr. Le Van C",
      price: 320000,
    },
  ];

  return (
    <div>
    <div className="max-w-7xl mx-auto p-6 font-sans min-h-screen bg-background  flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center mb-8 h-10">
        <Link
          to="/home"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Back</span>
        </Link>
        <h1 className="flex-grow text-center text-xl font-semibold">
          Prescription Upload
        </h1>
        <div className="w-12" /> {/* Placeholder for right side */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          {/* Upload Prescription Section */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h2 className="text-lg font-semibold mb-2 flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
             <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
             <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
              </svg>
              <span>Upload Prescription</span>
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Upload your prescription image to get pharmacist consultation and medicine preparation
            </p>

            {/* Patient Information */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1 font-medium" htmlFor="fullName">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="phoneNumber">
                  Phone Number *
                </label>
                <Input
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="age">
                  Age
                </label>
                <Input
                  id="age"
                  placeholder="Enter age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium" htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  className="w-full border rounded px-3 py-2"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Upload Prescription */}
            <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center mb-6 cursor-pointer hover:bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-20 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 16 16"
                stroke="currentColor"
              >
<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                Drag and drop files or click to select
              </p>
              <p className="text-xs text-gray-400">
                Supports: JPEG, PNG, PDF (max 10MB)
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button variant="outline">Take Photo</Button>
                <Button>Choose File</Button>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block mb-1 font-medium" htmlFor="notes">
                Additional Notes
              </label>
              <textarea
                id="notes"
                rows={4}
                className="w-full border rounded px-3 py-2 resize-none"
                placeholder="Enter additional health information, drug allergies..."
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
              Submit Prescription
            </Button>

            {/* Reminder */}
            <p className="mt-4 text-xs text-red-600 font-semibold text-center">
              Reminder: For the best results, upload a clear photo or a working PDF file. Blurry or damaged files may cause delays.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Process Steps */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-4">Process Steps</h3>
            <ol className="space-y-4">
              {processSteps.map((step) => (
                <li key={step.step} className="flex items-start space-x-3">
                  <div>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        step.status === "current"
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-gray-300 text-gray-400"
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        step.status === "current"
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Need Help */}
          <div className="border rounded-lg p-4 bg-white shadow-sm space-y-4">
            <h3 className="font-semibold">Need Help?</h3>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-5 w-5 text-blue-600" />
              <div>
                <p>Hotline</p>
                <p className="text-gray-500 text-xs">1800 6928</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p>Email</p>
                <p className="text-gray-500 text-xs">support@longchau.com</p>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Chat with Pharmacist
            </Button>
          </div>

          {/* Prescription History */}
          <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-4">Prescription History</h3>
            <ul className="space-y-4">
              {prescriptionHistory.map((prescription) => (
                <li
                  key={prescription.id}
                  className="flex items-center justify-between border rounded p-3"
                >
                  <div>
                    <p className="font-semibold">
                      Prescription #{prescription.number}
                      <span
                        className={`ml-2 px-2 py-0.5 rounded text-xs font-semibold ${
                          prescription.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : prescription.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {prescription.status}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {prescription.date} • {prescription.doctor}
                    </p>
                  </div>
                  <div className="font-semibold">
                    {prescription.price.toLocaleString()}đ
                  </div>
                  <button className="text-blue-600 text-sm underline">
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    
    </div>
    <div className="mt-auto">
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">LC</span>
                </div>
                <span className="font-bold text-2xl">Long Chau</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Vietnam's leading trusted pharmacy chain, committed to providing quality healthcare products and services to millions of customers nationwide.
              </p>
              <div className="flex items-center space-x-4 mb-4">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>1800 6928 (Free hotline)</span>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-blue-400" />
                <span>www.longchau.com.vn</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Products</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    Prescription Drugs
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    Over-the-Counter
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    Supplements
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    Personal Care
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-white transition-colors">
                    Medical Devices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/prescription" className="hover:text-white transition-colors">
                    Upload Prescription
                  </Link>
                </li>
                <li>
                  <Link to="/branches" className="hover:text-white transition-colors">
                    Find Store
                  </Link>
                </li>
                <li>
                  <Link to="/loyalty" className="hover:text-white transition-colors">
                    Loyalty Program
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="hover:text-white transition-colors">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link to="/consultation" className="hover:text-white transition-colors">
                    Health Consultation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 Long Chau Pharmacy. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-400">FDA Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}
