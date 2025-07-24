import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Truck } from "lucide-react";
import pic3 from "@/assets/pic3.jpg"

export function Hero() {
    return(
        <section className="bg-[linear-gradient(180deg,_#ffffff_0%,_#e0f7ff_100%)] py-16 ">
                
                    <div className="grid lg:grid-cols-2 gap-12 items-center ml-10">
                        <div>
                            <Badge className="mb-4 bg-blue-100 text-black">
                                Vietnam's #1 Online Pharmacy
                            </Badge>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Your Health,{" "}
                                <span className="text-blue-600">
                                    Our Priority
                                </span>
                            </h1>
                            <p className="text-sm text-gray-800 mb-8 leading-relaxed">
                                Buy medicines online safely and conveniently
                                with Vietnam's leading trusted pharmacy chain.{" "}
                                <strong className="font-bold text-black">
                                    {" "}
                                    Over 2 million customers{" "}
                                </strong>
                                trust us for their healthcare needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link to="/products">
                                    <Button
                                        size="lg"
                                        className="bg-black hover:bg-blue-600 text-lg px-8 py-3"
                                    >
                                        Shop Now
                                    </Button>
                                </Link>
                                <Link to="/prescription">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 py-3"
                                    >
                                        Upload Prescription
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-gray-800">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Free delivery over 300,000₫</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>24/7 pharmacist support</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src={pic3}
                                alt="Long Chau Pharmacy"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Truck className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Fast Delivery
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            2-4 hours in HCM City
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
    );
}