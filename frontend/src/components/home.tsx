import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpg";
import { featuredProducts } from "@/data/featuredProducts";
import { categories } from "@/data/categories";
import {
  healthTips,
  services,
  testimonials,
} from "@/data/HomePageContent";
import { CONTACTUS_IMAGES, HERO_IMAGES } from "@/constants/images";
import {
  Search,
  ShoppingCart,
  User,
  Bell,
  Heart,
  Phone,
  Star,
  ArrowRight,
  Quote,
  Package,
  Truck,
  Mail,
} from "lucide-react";
import { Footer } from "./Footer";
// import Link from "next/link"
// import img from "next/img"

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation merged */}
      <header className="sticky top-0 z-50 w-full px-4 py-2 border-b bg-background/95 backdrop-blur shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold  text-xl text-black font-inter">Long Châu Pharmacy</span>
            </Link>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/products"
              className="font-poppins text-xs font-bold hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link
              to="/prescription"
              className="font-poppins text-xs font-bold hover:text-blue-600 transition-colors"
            >
              Prescription
            </Link>
            <Link
              to="/branches"
              className="font-poppins text-xs font-bold hover:text-blue-600 transition-colors"
            >
              Stores
            </Link>
            <Link
              to="/home"
              className="font-poppins text-xs font-bold hover:text-blue-600 transition-colors"
            >
              Loyalty Points
            </Link>
            <Link
              to="/home"
              className="font-poppins text-xs font-bold hover:text-blue-600 transition-colors"
            >
              Staff
            </Link>
            <Link
              to="/home"
              className="font-poppins text-xs font-bold hover:text-blue-600 transition-colors"
            >
              Admin
            </Link>
          </nav>

          {/* Right: Search and Icons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search medicines..."
                className="pl-10 pr-4 border border-gray-300 hover:border-black focus:border-black focus:ring-0"
              />
            </div>

            {/* Icons */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  2
                </Badge>
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="font-poppins text-xl font-bold mb-2 bg-blue-100 text-black">
                Top 10 Best Online Pharmacy in VietNam
              </Badge>
              {/* // TODO: Find a way to change font really, bold it */}
              <h1 className="font-inter text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health,<br /> <span className="text-blue-600">Our Priority</span>
              </h1>
              <p className="font-family-inter text-sm text-gray-600 mb-8 leading-relaxed">
                Buy medicines online safely and conveniently with Vietnam's
                leading trusted pharmacy chain.{" "}
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
              {/* Feature highlights with appropriate icons */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Package className="h-5 w-5 text-green-500" />
                  <span>Free delivery over 300,000₫</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>24/7 pharmacist support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={HERO_IMAGES.pharmacy}
                alt="Long Chau Pharmacy"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {/* Fast delivery with speed icon */}
                    <Truck className="h-8 w-8 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold">Fast Delivery</p>
                    <p className="text-sm text-gray-600">
                      2-4 hours in HCM City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section*/}
       <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Service Grid */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => {
              // const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col h-80">
                    {/* Service Image */}
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-24 object-scale-down object-center transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Fixed Logo Position */}
                    {/* <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 ${service.bgColor} ${service.hoverColor} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div> */}
                    
                    {/* Fixed Title Position */}
                    <div className="text-center mb-3">
                      <h3 className="font-bold text-lg text-gray-800 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Fixed Description Position - with flex-grow to take available space */}
                    <div className="flex-grow flex items-start justify-center mb-4">
                      <p className="text-xs text-gray-600 leading-relaxed text-center line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Fixed Button Position */}
                    <div className="flex justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-700 transition-all duration-300 font-medium"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Right Column - You can add content here */}
          <div className="flex items-center justify-center h-full">
    <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Healthcare Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide comprehensive healthcare solutions designed to make your medical needs more accessible and convenient. From online pharmacy services to professional vaccinations, we're committed to your health and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Products
              </h2>
              <p className="text-lg text-gray-600">
                Top-rated products trusted by our customers
              </p>
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
              <Card
                key={product.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=200"}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {product.prescription && (
                        <Badge className="bg-red-500 text-xs">
                          Prescription
                        </Badge>
                      )}
                      {product.discount && (
                        <Badge className="bg-orange-500 text-xs">
                          -{product.discount}%
                        </Badge>
                      )}
                      {product.bestseller && (
                        <Badge className="bg-yellow-500 text-xs">
                          Bestseller
                        </Badge>
                      )}
                      {product.new && (
                        <Badge className="bg-blue-500 text-xs">New</Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="font-medium mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.brand}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-bold text-blue-600 text-lg">
                        {product.price}₫
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {product.originalPrice}₫
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Product Categories
              </h2>
              <p className="text-lg text-gray-600">
                Explore our comprehensive range of healthcare products
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline" size="lg">
                Show all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {categories.slice(0, 6).map((category, index) => (
              <Link key={index} to="/products" className="group">
                <div className="flex flex-col items-center text-center hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 shadow-md p-3">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-scale-down"
                    />
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Long Chau?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best healthcare experience with
              our comprehensive services and trusted quality.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="font-semibold text-lg mb-3">Safe & Trusted</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Authentic medicines with clear origins, FDA approved, and
                  quality guaranteed
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Truck className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="font-semibold text-lg mb-3">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivery within 2-4 hours in Ho Chi Minh City with
                  temperature-controlled transport
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <Clock className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="font-semibold text-lg mb-3">24/7 Service</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Customer support and pharmacist consultation available
                  anytime, anywhere
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="font-semibold text-lg mb-3">500+ Stores</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Wide network across the country with convenient pickup
                  locations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Promotions */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
                <div className={`${promo.color} p-6 text-white`}>
                  <div className="text-2xl font-bold mb-2">
                    {promo.discount}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-white/90">{promo.description}</p>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-gray-100 px-3 py-1 rounded-full">
                      <code className="text-sm font-mono">{promo.code}</code>
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
      </section> */}

      {/* Categories */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600">
              Explore our comprehensive range of healthcare products
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
                    <Badge variant="secondary" className="mb-2">
                      {category.count}
                    </Badge>
                    <div className="flex items-center justify-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Health Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Health Tips & Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with the latest health insights and wellness tips
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip) => (
              <Card
                key={tip.id}
                className="hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tip.img || "/placeholder.svg"}
                    alt={tip.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover object-center rounded-t-lg transition-transform duration-300 hover:scale-105"
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
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-gray-300 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-16 w-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
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

      {/* Contact Us */}
      <section className="py-8 bg-blue-100">
        <div className="container mx-auto px-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Form */}
            <div className="text-center">
              <h2 className="text-5xl font-bold text-black mb-4">
                Contact Us
              </h2>
              <p className="text-black mb-8 text-2xl font-bold">
                We are here for you, how can we help?
              </p>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your name"
                  className="bg-white border-0"
                />
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="bg-white border-0"
                />
                <textarea
                  placeholder="Go ahead, we are listening..."
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border-0 bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                />
                <Button className="bg-blue-600 text-white hover:bg-blue-700 font-bold w-7/8 px-8 text-2xl">
                  Submit
                </Button>
              </div>
            </div>

            {/* Right Column - Support Info */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-64 h-64 bg-black rounded-full flex items-center justify-center">
                  <img src={CONTACTUS_IMAGES.contactUs} className="object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Customer Support Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-black text-lg">1800 6928 (Free hotline)</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <span className="text-black text-lg">support@longchau.com.vn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
