import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react";

export function Categories() {
const categories = [
        {
            name: "Prescription Drugs",
            icon: "💊",
            count: "2,500+",
            description: "Doctor-prescribed medications",
        },
        {
            name: "Vitamins & Supplements",
            icon: "🌿",
            count: "1,200+",
            description: "Health & wellness products",
        },
        {
            name: "Personal Care",
            icon: "🧴",
            count: "800+",
            description: "Beauty & hygiene essentials",
        },
        {
            name: "Baby & Mom",
            icon: "👶",
            count: "600+",
            description: "Mother & child care products",
        },
        {
            name: "Medical Devices",
            icon: "🩺",
            count: "400+",
            description: "Healthcare equipment & tools",
        },
        {
            name: "Traditional Medicine",
            icon: "🌱",
            count: "300+",
            description: "Natural & herbal remedies",
        },
        {
            name: "First Aid",
            icon: "🏥",
            count: "250+",
            description: "Emergency care supplies",
        },
        {
            name: "Nutrition",
            icon: "🥗",
            count: "350+",
            description: "Dietary supplements & foods",
        },
    ];
    return(
    <section className="py-16 bg-[linear-gradient(120deg,_#89f7fe_0%,_#66a6ff_100%)]">
                <div className="container ml-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Product Categories
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore our comprehensive range of healthcare
                            products
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <Link key={index} to="/products">
                                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                            {category.icon}
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {category.description}
                                        </p>
                                        <Badge
                                            variant="secondary"
                                            className="mb-2"
                                        >
                                            {category.count}
                                        </Badge>
                                        <div className="flex items-center justify-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                                            Shop Now{" "}
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>);
}