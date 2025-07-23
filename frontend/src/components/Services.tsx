import { Stethoscope, CheckCircle, Truck, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
const services = [
        {
            icon: <FileText className="h-8 w-8 text-blue-600" />,
            title: "Prescription Services",
            description:
                "Upload prescriptions online and get medications delivered to your door",
            features: [
                "Digital prescription upload",
                "Pharmacist consultation",
                "Insurance coverage check",
            ],
        },
        {
            icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
            title: "Health Consultations",
            description:
                "Get expert advice from licensed pharmacists and healthcare professionals",
            features: [
                "Free health consultations",
                "Medication reviews",
                "Health screenings",
            ],
        },
        {
            icon: <Truck className="h-8 w-8 text-blue-600" />,
            title: "Fast Delivery",
            description:
                "Same-day delivery available in major cities across Vietnam",
            features: [
                "2-4 hour delivery",
                "Temperature-controlled transport",
                "Real-time tracking",
            ],
        },
        {
            icon: <Shield className="h-8 w-8 text-blue-600" />,
            title: "Quality Assurance",
            description:
                "All medications are sourced from certified manufacturers and suppliers",
            features: [
                "FDA approved products",
                "Batch tracking",
                "Expiry date monitoring",
            ],
        },
    ];
    return(
    <section className="py-16 bg-white">
                <div className="container ml-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive healthcare services designed to meet
                            all your medical and wellness needs
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            {service.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-3">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {service.description}
                                            </p>
                                            <ul className="space-y-2">
                                                {service.features.map(
                                                    (feature, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-center text-sm text-gray-600"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                                            {feature}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>);
}