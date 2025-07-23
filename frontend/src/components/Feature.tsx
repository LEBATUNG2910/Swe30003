import { CardContent, Card } from "@/components/ui/card";
import { Shield, Truck, Clock, MapPin } from "lucide-react";

export function Feature() {
    return(
        <section className="py-16 bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(9,9,121,1)_8%,_rgba(0,212,255,1)_100%)]">
                <div className="container ml-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Why Choose Long Chau?
                        </h2>
                        <p className="text-lg text-white max-w-2xl mx-auto">
                            We're committed to providing the best healthcare
                            experience with our comprehensive services and
                            trusted quality.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8 pb-6">
                                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                                <h3 className="font-semibold text-lg mb-3">
                                    Safe & Trusted
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Authentic medicines with clear origins, FDA
                                    approved, and quality guaranteed
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8 pb-6">
                                <Truck className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                                <h3 className="font-semibold text-lg mb-3">
                                    Fast Delivery
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Delivery within 2-4 hours in Ho Chi Minh
                                    City with temperature-controlled transport
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8 pb-6">
                                <Clock className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                                <h3 className="font-semibold text-lg mb-3">
                                    24/7 Service
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Customer support and pharmacist consultation
                                    available anytime, anywhere
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center hover:shadow-lg transition-shadow">
                            <CardContent className="pt-8 pb-6">
                                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                                <h3 className="font-semibold text-lg mb-3">
                                    500+ Stores
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Wide network across the country with
                                    convenient pickup locations
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
    );
}