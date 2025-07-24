import { Card, CardContent} from "@/components/ui/card"
import {Star, Quote} from "lucide-react"
import pic8 from "@/assets/pic8.jpg"
import pic9 from "@/assets/pic9.jpg"
import pic10 from "@/assets/pic10.jpg"

export function Testimonials() {
const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Regular Customer",
            rating: 5,
            comment:
                "Long Chau has been my go-to pharmacy for years. Their online service is incredibly convenient and the delivery is always on time.",
            avatar: pic8,
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            role: "Healthcare Professional",
            rating: 5,
            comment:
                "I recommend Long Chau to my patients. They have a wide selection of quality medications and knowledgeable pharmacists.",
            avatar: pic9,
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Mother of 2",
            rating: 5,
            comment:
                "The prescription upload feature is a game-changer for busy parents. Quick, easy, and reliable service every time.",
            avatar: pic10,
        },
    ];
  return (
   <section className="py-16 bg-[linear-gradient(90deg,_#fbc2eb_0%,_#a6c1ee_100%)]">
                <div className="container ml-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-lg text-white">
                            Trusted by millions of customers across Vietnam
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <Card
                                key={testimonial.id}
                                className="hover:shadow-lg transition-shadow"
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                                />
                                            )
                                        )}
                                    </div>
                                    <Quote className="h-8 w-8 text-gray-300 mb-4" />
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {testimonial.comment}
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className=" w-10 h-10 rounded-lg mr-3"
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
  );
}
