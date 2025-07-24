import {Card, CardContent} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import pic4 from "@/assets/pic4.jpg"
import pic5 from "@/assets/pic5.jpg"
import pic6 from "@/assets/pic6.jpg"
import pic7 from "@/assets/pic7.jpg"

export function Health() {
const healthTips = [
        {
            id: 1,
            title: "10 Essential Vitamins for Daily Health",
            category: "Nutrition",
            readTime: "5 min read",
            Image: pic4,
            excerpt:
                "Discover the most important vitamins your body needs every day for optimal health and wellness.",
        },
        {
            id: 2,
            title: "Managing Diabetes: A Complete Guide",
            category: "Health Management",
            readTime: "8 min read",
            Image: pic5,
            excerpt:
                "Learn effective strategies for managing diabetes through medication, diet, and lifestyle changes.",
        },
        {
            id: 3,
            title: "Heart Health: Prevention Tips",
            category: "Cardiovascular",
            readTime: "6 min read",
            Image: pic6,
            excerpt:
                "Simple yet effective ways to maintain a healthy heart and prevent cardiovascular diseases.",
        },
        {
            id: 4,
            title: "Boost Your Immune System Naturally",
            category: "Immunity",
            readTime: "4 min read",
            Image: pic7,
            excerpt:
                "Natural methods and supplements to strengthen your immune system year-round.",
        },
    ];

    return(
    <section className="py-16 bg-white">
                <div className="container ml-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Health Tips & Articles
                        </h2>
                        <p className="text-lg text-gray-600">
                            Stay informed with the latest health insights and
                            wellness tips
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {healthTips.map((tip) => (
                            <Card
                                key={tip.id}
                                className="hover:shadow-lg transition-shadow cursor-pointer"
                            >
                                <div className="relative">
                                    <img
                                        src={tip.Image}
                                        alt={tip.title}
                                        className="w-full h-full object-cover rounded-t-lg"
                                    />
                                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">
                                        {tip.category}
                                    </Badge>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-2 line-clamp-2">
                                        {tip.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                                        {tip.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>{tip.readTime}</span>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="p-0 h-auto text-blue-600 hover:text-blue-700"
                                        >
                                            Read More{" "}
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            );
}