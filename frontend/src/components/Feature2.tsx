import { Link } from "react-router-dom";
import { Card, CardContent} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Heart, Star, ShoppingCart } from "lucide-react";


export function Feature2() {
    const featuredProducts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: "15,000",
      originalPrice: "20,000",
      brand: "Traphaco",
      rating: 4.5,
      reviews: 128,
      prescription: false,
      discount: 25,
    },
    {
      id: 2,
      name: "Vitamin C 1000mg",
      price: "85,000",
      brand: "DHG Pharma",
      rating: 4.8,
      reviews: 256,
      prescription: false,
      bestseller: true,
    },
    {
      id: 3,
      name: "Amoxicillin 500mg",
      price: "45,000",
      brand: "Imexpharm",
      rating: 4.3,
      reviews: 89,
      prescription: true,
    },
    {
      id: 4,
      name: "Omega-3 Fish Oil",
      price: "120,000",
      brand: "Blackmores",
      rating: 4.7,
      reviews: 342,
      prescription: false,
    },
    {
      id: 5,
      name: "Probiotics Complex",
      price: "180,000",
      brand: "Bio-Life",
      rating: 4.6,
      reviews: 198,
      prescription: false,
      new: true,
    },
    {
      id: 6,
      name: "Calcium + D3",
      price: "95,000",
      brand: "Centrum",
      rating: 4.4,
      reviews: 167,
      prescription: false,
    },
    {
      id: 7,
      name: "Iron Supplement",
      price: "65,000",
      brand: "Nature Made",
      rating: 4.5,
      reviews: 134,
      prescription: false,
    },
    {
      id: 8,
      name: "Multivitamin Women",
      price: "110,000",
      brand: "One A Day",
      rating: 4.7,
      reviews: 289,
      prescription: false,
    },
  ]

    return(
    <section className="py-16 bg-[linear-gradient(90deg,_#667eea_0%,_#764ba2_100%)]">
        <div className="container ml-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
              <p className="text-lg text-black">Top-rated products trusted by our customers</p>
            </div>
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src="/placeholder.svg?height=200&width=200"
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {product.prescription && <Badge className="bg-red-500 text-xs">Prescription</Badge>}
                      {product.discount && <Badge className="bg-orange-500 text-xs">-{product.discount}%</Badge>}
                      {product.bestseller && <Badge className="bg-yellow-500 text-xs">Bestseller</Badge>}
                      {product.new && <Badge className="bg-blue-500 text-xs">New</Badge>}
                    </div>
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-bold text-blue-600 text-lg">{product.price}₫</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {product.originalPrice}₫
                        </span>
                      )}
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      );
}