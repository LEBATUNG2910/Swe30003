import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Upload, FileText, Camera, AlertCircle, CheckCircle } from "lucide-react";

export function UploadPrescriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Long Chau
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Upload Your Prescription</h1>
          <p className="text-gray-600">
            Upload your prescription and we'll prepare your medicines for quick pickup or delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Prescription Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="patientName">Patient Name</Label>
                  <Input id="patientName" placeholder="Enter patient full name" />
                </div>
                <div>
                  <Label htmlFor="doctorName">Doctor Name</Label>
                  <Input id="doctorName" placeholder="Enter doctor name" />
                </div>
                <div>
                  <Label htmlFor="hospitalName">Hospital/Clinic Name</Label>
                  <Input id="hospitalName" placeholder="Enter hospital or clinic name" />
                </div>
                <div>
                  <Label htmlFor="prescriptionDate">Prescription Date</Label>
                  <Input id="prescriptionDate" type="date" />
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any special instructions or notes for the pharmacist"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Prescription Image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-4">
                      <Camera className="h-12 w-12 text-gray-400" />
                      <Upload className="h-12 w-12 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Upload Prescription</p>
                      <p className="text-gray-600">
                        Drag and drop your prescription image or click to browse
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline">
                        <Camera className="h-4 w-4 mr-2" />
                        Take Photo
                      </Button>
                      <Button variant="outline">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload File
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Supported formats: JPG, PNG, PDF (Max 10MB)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions & Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Upload Prescription</h4>
                      <p className="text-sm text-gray-600">
                        Take a clear photo or upload an image of your prescription
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Pharmacist Review</h4>
                      <p className="text-sm text-gray-600">
                        Our licensed pharmacist will review and verify your prescription
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Preparation & Delivery</h4>
                      <p className="text-sm text-gray-600">
                        We'll prepare your medicines and deliver them to your doorstep
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-orange-600">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Important Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Ensure prescription is clearly visible and readable</li>
                  <li>• Prescription must be issued within the last 30 days</li>
                  <li>• Include doctor's signature and hospital stamp</li>
                  <li>• Patient information must match your profile</li>
                  <li>• For controlled substances, additional verification may be required</li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                Submit Prescription
              </Button>
              <p className="text-center text-sm text-gray-600">
                Need help? Call our pharmacist at{" "}
                <a href="tel:18006928" className="text-blue-600 font-medium">
                  1800 6928
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}