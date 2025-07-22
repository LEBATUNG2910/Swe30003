import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
    Search,
    ShoppingCart,
    User,
    Bell,
    Heart,
    MapPin,
    Phone,
    Star,
    Shield,
    Truck,
    Clock,
    Award,
    Users,
    CheckCircle,
    ArrowRight,
    Quote,
    Stethoscope,
    Pill,
    Globe,
    FileText,
} from "lucide-react";
// import Link from "next/link"
// import img from "next/img"

export function Home() {
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
    ];

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

    const healthTips = [
        {
            id: 1,
            title: "10 Essential Vitamins for Daily Health",
            category: "Nutrition",
            readTime: "5 min read",
            img: "/placeholder.svg?height=200&width=300",
            excerpt:
                "Discover the most important vitamins your body needs every day for optimal health and wellness.",
        },
        {
            id: 2,
            title: "Managing Diabetes: A Complete Guide",
            category: "Health Management",
            readTime: "8 min read",
            img: "/placeholder.svg?height=200&width=300",
            excerpt:
                "Learn effective strategies for managing diabetes through medication, diet, and lifestyle changes.",
        },
        {
            id: 3,
            title: "Heart Health: Prevention Tips",
            category: "Cardiovascular",
            readTime: "6 min read",
            img: "/placeholder.svg?height=200&width=300",
            excerpt:
                "Simple yet effective ways to maintain a healthy heart and prevent cardiovascular diseases.",
        },
        {
            id: 4,
            title: "Boost Your Immune System Naturally",
            category: "Immunity",
            readTime: "4 min read",
            img: "/placeholder.svg?height=200&width=300",
            excerpt:
                "Natural methods and supplements to strengthen your immune system year-round.",
        },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Regular Customer",
            rating: 5,
            comment:
                "Long Chau has been my go-to pharmacy for years. Their online service is incredibly convenient and the delivery is always on time.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            role: "Healthcare Professional",
            rating: 5,
            comment:
                "I recommend Long Chau to my patients. They have a wide selection of quality medications and knowledgeable pharmacists.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Mother of 2",
            rating: 5,
            comment:
                "The prescription upload feature is a game-changer for busy parents. Quick, easy, and reliable service every time.",
            avatar: "/placeholder.svg?height=60&width=60",
        },
    ];

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
        <div className="max-h-screen bg-background">
            {/* Header with Navigation merged */}
            <header className="sticky top-0 z-50 w-full p-2  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="flex items-center space-x-2 ml-8">
                            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">
                                    LC
                                </span>
                            </div>
                            <span className="font-bold text-xl text-blue-600">
                                Long Chau
                            </span>
                        </Link>
                    </div>

                    {/* Center: Navigation (NEW position) */}
                    <nav className="flex space-x-6">
                        <Link
                            to="/products"
                            className="text-sm font-medium hover:text-blue-600 transition-colors"
                        >
                            Products
                        </Link>
                        <Link
                            to="/prescription"
                            className="text-sm font-medium hover:text-blue-600 transition-colors"
                        >
                            Prescription
                        </Link>
                        <Link
                            to="/branches"
                            className="text-sm font-medium hover:text-blue-600 transition-colors"
                        >
                            Stores
                        </Link>
                    </nav>

                    {/* Right: Search and Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative w-100 mr-26">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                placeholder="Search medicines, supplements..."
                                className="pl-10 pr-4 border border-gray-300 hover:border-black focus:border-black focus:ring-0"
                            />
                        </div>

                        {/* Icons */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative"
                        >
                            <Bell className="h-5 w-5" />
                            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                3
                            </Badge>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Link to="/cart">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative"
                            >
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
                <div className="">
                    <div className="grid lg:grid-cols-2 gap-12 items-center ml-10">
                        <div>
                            <Badge className="mb-4 bg-blue-100 text-black">
                                Vietnam's #1 Online Pharmacy
                            </Badge>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Your Health,{" "}
                                <span className="text-blue-600">
                                    Our Priority
                                </span>
                            </h1>
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                Buy medicines online safely and conveniently
                                with Vietnam's leading trusted pharmacy chain.{" "}
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
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>Free delivery over 300,000₫</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span>24/7 pharmacist support</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/placeholder.svg?height=500&width=600"
                                alt="Long Chau Pharmacy"
                                width={600}
                                height={500}
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Truck className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Fast Delivery
                                        </p>
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

            {/* Stats Section */}
            <section className="py-16 bg-white ml-6">
                <div className="container">
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
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Choose Long Chau?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

            {/* Promotions */}
            <section className="py-16 bg-white">
                <div className="container">
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
            </section>

            {/* Categories */}
            <section className="py-16 bg-gray-50">
                <div className="container">
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
            </section>

            {/* Services */}
            <section className="py-16 bg-white">
                <div className="container">
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
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50">
                <div className="container">
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
                                            src="/placeholder.svg?height=200&width=200"
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
                                                <Badge className="bg-blue-500 text-xs">
                                                    New
                                                </Badge>
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
                                            <span className="text-sm ml-1">
                                                {product.rating}
                                            </span>
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

            {/* Health Tips */}
            <section className="py-16 bg-white">
                <div className="container">
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
                                        src={tip.img || "/placeholder.svg"}
                                        alt={tip.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-t-lg"
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

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container">
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
                                            src={
                                                testimonial.avatar ||
                                                "/placeholder.svg"
                                            }
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full mr-3"
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

            {/* Newsletter */}
            <section className="py-16 bg-blue-600">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Stay Updated with Health News
                        </h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Subscribe to our newsletter for the latest health
                            tips, product updates, and exclusive offers
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                placeholder="Enter your email address"
                                className="flex-1 bg-white border-0"
                            />
                            <Button className="bg-white text-blue-600 hover:bg-gray-100">
                                Subscribe
                            </Button>
                        </div>
                        <p className="text-blue-200 text-sm mt-4">
                            Join over 100,000 subscribers. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="container">
                    <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold">
                                        LC
                                    </span>
                                </div>
                                <span className="font-bold text-2xl">
                                    Long Chau
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Vietnam's leading trusted pharmacy chain,
                                committed to providing quality healthcare
                                products and services to millions of customers
                                nationwide.
                            </p>
                            <div className="flex items-center space-x-4 mb-4">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span>1800 6928 (Free hotline)</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Globe className="h-5 w-5 text-blue-400" />
                                <span>www.longchau.com.vn</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-6 text-lg">
                                Products
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        to="/products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Prescription Drugs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Over-the-Counter
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Supplements
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Personal Care
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Medical Devices
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-6 text-lg">
                                Services
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        to="/prescription"
                                        className="hover:text-white transition-colors"
                                    >
                                        Upload Prescription
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/branches"
                                        className="hover:text-white transition-colors"
                                    >
                                        Find Store
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/loyalty"
                                        className="hover:text-white transition-colors"
                                    >
                                        Loyalty Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/orders"
                                        className="hover:text-white transition-colors"
                                    >
                                        Track Order
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/consultation"
                                        className="hover:text-white transition-colors"
                                    >
                                        Health Consultation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-6 text-lg">
                                Support
                            </h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <Link
                                        to="/contact"
                                        className="hover:text-white transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/faq"
                                        className="hover:text-white transition-colors"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/policy"
                                        className="hover:text-white transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/terms"
                                        className="hover:text-white transition-colors"
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/careers"
                                        className="hover:text-white transition-colors"
                                    >
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 mb-4 md:mb-0">
                                &copy; 2024 Long Chau Pharmacy. All rights
                                reserved.
                            </p>
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-2">
                                    <Shield className="h-4 w-4 text-blue-400" />
                                    <span className="text-sm text-gray-400">
                                        SSL Secured
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Award className="h-4 w-4 text-blue-400" />
                                    <span className="text-sm text-gray-400">
                                        FDA Approved
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
