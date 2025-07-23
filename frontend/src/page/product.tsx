import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Grid,
} from "lucide-react";

export function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: "15,000",
      originalPrice: "20,000",
      brand: "Traphaco",
      rating: 4.5,
      reviews: 128,
      discount: 25,
      inStock: true,
    },
    // Add more products as needed
  ];

  const categories = [
    "All",
    "Pain Relief",
    "Vitamins",
    "Antibiotics",
    "Cold & Flu",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Long Chau
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-80"
                />
              </div>
              <Link to="/cart">
                <Button variant="outline" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                <Input placeholder="Min price" />
                <Input placeholder="Max price" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Products</h1>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <img
                        src="/placeholder.svg?height=200&width=200"
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      {product.discount && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                          -{product.discount}%
                        </Badge>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>

                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.brand}
                    </p>

                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                      <span className="text-sm text-gray-500 ml-2">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="font-bold text-blue-600">
                          {product.price}₫
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            {product.originalPrice}₫
                          </span>
                        )}
                      </div>
                    </div>

                    <Button className="w-full" disabled={!product.inStock}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
