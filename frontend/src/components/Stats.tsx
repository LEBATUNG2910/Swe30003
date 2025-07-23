import { MapPin, Users, Pill, Clock } from "lucide-react";
export function Stats() {
    const stats = [
        {
            number: "500+",
            label: "Store Locations",
            icon: <MapPin className="h-6 w-6" />,
        },
        {
            number: "2M+",
            label: "Happy Customers",
            icon: <Users className="h-6 w-6" />,
        },
        {
            number: "50K+",
            label: "Products Available",
            icon: <Pill className="h-6 w-6" />,
        },
        {
            number: "24/7",
            label: "Customer Support",
            icon: <Clock className="h-6 w-6" />,
        },
    ];
    return(
    <section className="py-16 bg-white">
                <div className="container ml-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>);
}