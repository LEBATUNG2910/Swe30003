import {Card, CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export function Promotions() {
    const promotions = [
        {
            id: 1,
            title: "New Customer Special",
            discount: "20% OFF",
            description: "Get 20% off your first order over 200,000₫",
            code: "WELCOME20",
            validUntil: "Dec 31, 2024",
            color: "bg-gradient-to-r from-blue-500 to-purple-600",
        },
        {
            id: 2,
            title: "Free Delivery Week",
            discount: "FREE SHIPPING",
            description: "Free delivery on all orders this week",
            code: "FREESHIP",
            validUntil: "Dec 25, 2024",
            color: "bg-gradient-to-r from-blue-500 to-teal-600",
        },
        {
            id: 3,
            title: "Vitamin Bundle Deal",
            discount: "Buy 2 Get 1",
            description: "Special offer on all vitamin supplements",
            code: "VITAMIN3",
            validUntil: "Jan 15, 2025",
            color: "bg-gradient-to-r from-blue-500 to-indigo-600",
        },
    ];
    return (    
    <section className="py-16 bg-white">
                <div className="container ml-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Special Offers
                        </h2>
                        <p className="text-lg text-gray-600">
                            Don't miss out on these amazing deals and promotions
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {promotions.map((promo) => (
                            <Card
                                key={promo.id}
                                className="overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div
                                    className={`${promo.color} p-6 text-white`}
                                >
                                    <div className="text-2xl font-bold mb-2">
                                        {promo.discount}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {promo.title}
                                    </h3>
                                    <p className="text-white/90">
                                        {promo.description}
                                    </p>
                                </div>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="bg-gray-100 px-3 py-1 rounded-full">
                                            <code className="text-sm font-mono">
                                                {promo.code}
                                            </code>
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            Valid until {promo.validUntil}
                                        </span>
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                        Claim Offer
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>);
}