import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Calendar,
  Clock,
  Download,
  Share2,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ConfirmOrder() {
  const orderNumber = "#ORD001234";
  const orderDate = "January 15, 2024";
  const orderTime = "2:30 PM";

  const itemsOrdered = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      brand: "Traphaco",
      price: 100000,
      quantity: 2,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      brand: "DHG Pharma",
      price: 85000,
      quantity: 1,
      image: "/placeholder.svg?height=48&width=48",
    },
  ];

  const deliveryAddress = "123 Nguyen Trai Street, District 1, Ho Chi Minh City";
  const deliveryPhone = "0901234567";
  const deliveryMethod = "Home Delivery";
  const deliveryEstimate = "2-4 hours delivery";

  const orderProgress = [
    { step: 1, title: "Order Processing", description: "We're preparing your order", status: "current" },
    { step: 2, title: "Pharmacist Review", description: "Prescription validation (if applicable)", status: "pending" },
    { step: 3, title: "Packaging", description: "Items being carefully packaged", status: "pending" },
    { step: 4, title: "Out for Delivery", description: "On the way to your address", status: "pending" },
  ];

  const subtotal = 185000;
  const shippingFee = 25000;
  const discount = -25000;
  const totalPaid = 185000;
  const loyaltyPoints = 125;
  const paymentMethod = "Credit Card (**** 1234)";

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans bg-background min-h-screen">
      <div className="text-center mb-8">
        <CheckCircle className="mx-auto mb-4 h-12 w-12 text-blue-600" />
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-700">
          Thank you for your order. We've received your payment and will start processing immediately.
        </p>
        <p className="text-gray-500 mt-1 text-sm">
          <Calendar className="inline mr-1 mb-1" /> {orderDate} &nbsp;&nbsp;
          <Clock className="inline mr-1 mb-1" /> {orderTime}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Order Details */}
        <Card className="md:col-span-2">
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Order Details</h2>
              <Badge variant="outline" className="text-green-600 border-green-600">
                Confirmed
              </Badge>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Order Number <br />
              <span className="font-mono font-semibold">{orderNumber}</span>
            </p>
            <p className="text-sm text-blue-600 mb-4 cursor-pointer hover:underline">
              Estimated Delivery <br />
              <span className="font-semibold">January 15, 2024 (4:30 PM - 6:30 PM)</span>
            </p>

            <div className="space-y-4">
              {itemsOrdered.map((item) => (
                <div key={item.id} className="flex items-center justify-between border rounded p-3">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.brand}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{item.price.toLocaleString()}₫</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Delivery Information</h3>
                <p><span className="inline-block mr-1"><MapPin className="inline h-4 w-4" /></span> {deliveryAddress}</p>
                <p><span className="inline-block mr-1"><Phone className="inline h-4 w-4" /></span> {deliveryPhone}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Delivery Method</h3>
                <p className="bg-blue-100 text-blue-700 rounded px-3 py-1 inline-block">{deliveryMethod}</p>
                <p className="text-xs text-gray-500">{deliveryEstimate}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Order Progress</h3>
              <ol className="space-y-4">
                {orderProgress.map((step) => (
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
                      <p className={`font-semibold ${step.status === "current" ? "text-blue-600" : "text-gray-600"}`}>
                        {step.title}
                      </p>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm mb-1">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString()}₫</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span>Shipping Fee</span>
                <span>{shippingFee.toLocaleString()}₫</span>
              </div>
              <div className="flex justify-between text-sm text-blue-600 mb-1">
                <span>Discount</span>
                <span>{discount.toLocaleString()}₫</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total Paid</span>
                <span>{totalPaid.toLocaleString()}₫</span>
              </div>
              <div className="mt-4 p-2 bg-blue-50 rounded text-blue-700 text-sm">
                Loyalty Points Earned <br />
                <span className="font-semibold">+{loyaltyPoints} points</span>
              </div>
              <div className="mt-4 text-sm">
                <p className="font-semibold mb-1">Payment Method</p>
                <p>{paymentMethod}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent className="space-y-3">
              <h3 className="font-semibold">Quick Actions</h3>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download Receipt
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Order
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Track Order <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card>
            <CardContent className="space-y-3">
              <h3 className="font-semibold">Need Help?</h3>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p>Call Us</p>
                  <p className="text-gray-500 text-xs">1800 6928 (Free)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p>Email Support</p>
                  <p className="text-gray-500 text-xs">support@longchau.com</p>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Chat with Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded p-6 text-center text-sm text-gray-700 space-y-4">
        <p>
          Thank you for choosing Long Chau! <br />
          Your health is our priority. Continue shopping for more healthcare products.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/home">
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>

      {/* Review Prompt */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded p-4 text-sm flex justify-between items-center">
        <div>
          <p className="font-semibold">Love our service?</p>
          <p>Help other customers by sharing your experience with Long Chau.</p>
        </div>
        <Button className="bg-yellow-400 hover:bg-yellow-500">Leave a Review</Button>
      </div>
    </div>
  );
}
