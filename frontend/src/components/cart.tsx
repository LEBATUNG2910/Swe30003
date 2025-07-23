import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  User,
  Bell,
  Badge,
  Heart,
  Phone,
  Globe,
  Shield,
  Award,
  Trash2,
} from "lucide-react";
export function Cart() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    paracetamol: 1,
    vitaminC: 1,
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [deliveryOption, setDeliveryOption] = useState("home");
  const prices = {
    paracetamol: 50000,
    vitaminC: 85000,
  };

  const subtotal =
    quantities.paracetamol * prices.paracetamol +
    quantities.vitaminC * prices.vitaminC;
  const shippingFee = deliveryOption === "home" ? 25000 : 0;
  const discount = -25000;
  const total = subtotal + shippingFee + discount;

  const updateQuantity = (item: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(1, prev[item] + delta),
    }));
  };

  return (
    <div>
      <div className="p-6 max-w-6xl mx-auto font-sans">
        <div className="relative flex items-center mb-4 h-10">
          <Link
            to="/home"
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="w-6 h-6" />
            <span>Back</span>
          </Link>

          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold">
            Shopping Cart (2)
          </h1>
          <div className="absolute right-1 flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 " />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-4">
            {/* Product Item 1 */}
            <div className="border p-4 rounded-lg shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/assets/pic1.jpg"
                  alt="Paracetamol 500g"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">Paracetamol 500g</p>
                  <p className="text-sm text-gray-500">Stella</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity("paracetamol", -1)}
                      className="px-2 border rounded"
                    >
                      -
                    </button>
                    <span>{quantities.paracetamol}</span>
                    <button
                      onClick={() => updateQuantity("paracetamol", 1)}
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-blue-600 font-semibold text-left">
                    50.000đ
                  </p>
                  <p className="text-gray-600 text-xs">55.000đ/item</p>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 />
                </button>
              </div>
            </div>

            {/* Product Item 2 */}
            <div className="border p-4 rounded-lg shadow-sm flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src="/assets/pic2.jpg"
                  alt="Vitamin C 1000mg"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">Vitamin C 1000mg</p>
                  <p className="text-sm text-gray-500">Enlie</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity("vitaminC", -1)}
                      className="px-2 border rounded"
                    >
                      -
                    </button>
                    <span>{quantities.vitaminC}</span>
                    <button
                      onClick={() => updateQuantity("vitaminC", 1)}
                      className="px-2 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-blue-600 font-semibold text-left">
                    85.000đ
                  </p>
                  <p className="text-gray-600 text-xs">85.000đ/item</p>
                </div>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 />
                </button>
              </div>
            </div>

            {/* Coupon */}
            <div className="flex space-x-2">
              <input
                className="border rounded px-4 py-2 w-full"
                placeholder="Enter coupon code"
              />
              <button className="bg-gray-100 px-4 py-2 rounded border">
                Apply
              </button>
            </div>

            {/* Delivery Options */}
            <div className="border rounded-lg p-4">
              <p className="font-semibold mb-2">Delivery Options</p>
              <div className="space-y-2">
                <div
                  onClick={() => setDeliveryOption("home")}
                  className={`p-2 border rounded cursor-pointer ${
                    deliveryOption === "home"
                      ? "bg-green-100 border-green-500"
                      : ""
                  }`}
                >
                  <p className="font-medium">🏠 Home Delivery</p>
                  <p className="text-sm text-gray-500">2-4 hours - 25.000đ</p>
                </div>
                <div
                  onClick={() => setDeliveryOption("pickup")}
                  className={`p-2 border rounded cursor-pointer ${
                    deliveryOption === "pickup"
                      ? "bg-green-100 border-green-500"
                      : ""
                  }`}
                >
                  <p className="font-medium">🏬 Store Pickup</p>
                  <p className="text-sm text-gray-500">30 minutes - Free</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <div className="border rounded-lg p-4">
              <p className="font-semibold mb-2">Payment Methods</p>
              <div className="space-y-2">
                <label
                  className={`block p-2 border rounded cursor-pointer ${
                    paymentMethod === "card"
                      ? "bg-green-100 border-green-500"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mr-2 "
                  />
                <span className="font-semibold">Credit/Debit Card</span>
                </label>
                <label
                  className={`block p-2 border rounded cursor-pointer ${
                    paymentMethod === "wallet"
                      ? "bg-green-100 border-green-500"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "wallet"}
                    onChange={() => setPaymentMethod("wallet")}
                    className="mr-2"
                  />
                  <span className="font-semibold"> E-Wallet (VNPay, Momo) </span>
                </label>
                <label
                  className={`block p-2 border rounded cursor-pointer ${
                    paymentMethod === "cod"
                      ? "bg-green-100 border-green-500"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mr-2"
                  />
                   <span className="font-semibold">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border rounded-lg p-4 space-y-2">
              <p className="font-semibold">Order Summary</p>
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{subtotal.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping Fee</span>
                <span>{shippingFee.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between text-sm text-blue-600">
                <span>Discount: First Time Order</span>
                <span>{discount.toLocaleString()}đ</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>{total.toLocaleString()}đ</span>
              </div>
              <Link to="/confirm">
                <Button variant="cart" className="relative">
                  Place order
                </Button>
              </Link>
              <p className="text-xs text-center mt-2">
                By placing an order, you agree to our{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Terms of Service
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
                Vietnam's leading trusted pharmacy chain, committed to providing
                quality healthcare products and services to millions of
                customers nationwide.
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
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Prescription Drugs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Over-the-Counter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Supplements
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Personal Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-white transition-colors"
                  >
                    Medical Devices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/prescription"
                    className="hover:text-white transition-colors"
                  >
                    Upload Prescription
                  </Link>
                </li>
                <li>
                  <Link
                    to="/branches"
                    className="hover:text-white transition-colors"
                  >
                    Find Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loyalty"
                    className="hover:text-white transition-colors"
                  >
                    Loyalty Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="hover:text-white transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    to="/consultation"
                    className="hover:text-white transition-colors"
                  >
                    Health Consultation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors"
                  >
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
  );
}
