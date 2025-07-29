import {
  Users,
  MapPin,
  Clock,
  Pill,
} from "lucide-react";
import { SERVICE_IMAGES, HEALTH_TIP_IMAGES, TESTIMONIAL_IMAGES } from '../constants/images';


export const healthTips = [
  {
    id: 1,
    title: "10 Essential Vitamins for Daily Health",
    category: "Nutrition",
    readTime: "5 min read",
    img: HEALTH_TIP_IMAGES.tips1,
    excerpt:
      "Discover the most important vitamins your body needs every day for optimal health and wellness.",
  },
  {
    id: 2,
    title: "Managing Diabetes: A Complete Guide",
    category: "Health Management",
    readTime: "8 min read",
    img: HEALTH_TIP_IMAGES.tips2,
    excerpt:
      "Learn effective strategies for managing diabetes through medication, diet, and lifestyle changes.",
  },
  {
    id: 3,
    title: "Heart Health: Prevention Tips",
    category: "Cardiovascular",
    readTime: "6 min read",
    img: HEALTH_TIP_IMAGES.tips3,
    excerpt:
      "Simple yet effective ways to maintain a healthy heart and prevent cardiovascular diseases.",
  },
  {
    id: 4,
    title: "Boost Your Immune System Naturally",
    category: "Immunity",
    readTime: "4 min read",
    img: HEALTH_TIP_IMAGES.tips4,
    excerpt:
      "Natural methods and supplements to strengthen your immune system year-round.",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Customer",
    rating: 5,
    comment:
      "Long Chau has been my go-to pharmacy for years. Their online service is incredibly convenient and the delivery is always on time.",
    avatar: TESTIMONIAL_IMAGES.person1,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    role: "Healthcare Professional",
    rating: 5,
    comment:
      "I recommend Long Chau to my patients. They have a wide selection of quality medications and knowledgeable pharmacists.",
    avatar: TESTIMONIAL_IMAGES.person2,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Mother of 2",
    rating: 5,
    comment:
      "The prescription upload feature is a game-changer for busy parents. Quick, easy, and reliable service every time.",
    avatar: TESTIMONIAL_IMAGES.person3,
  },
];

export const stats = [
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

export const promotions = [
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

export const services = [
  {
    title: "Online Pharmacy",
    image: SERVICE_IMAGES.onlinePharmacy,
    description: "Shop for a wide range of genuine medicines and healthcare products through our trusted online pharmacy.",
    bgColor: "bg-blue-500",
    hoverColor: "hover:bg-blue-600"
  },
  {
    title: "Upload Prescription",
    image: SERVICE_IMAGES.prescription,
    description: "Simply upload your doctor's prescription using our secure platform. Our pharmacists will review and process your order quickly.",
    bgColor: "bg-green-500",
    hoverColor: "hover:bg-green-600"
  },
  {
    title: "Vaccination",
    image: SERVICE_IMAGES.vaccine,
    description: "Book your vaccinations with ease through our online system. We offer a variety of vaccines administered by certified professionals at trusted locations.",
    bgColor: "bg-purple-500",
    hoverColor: "hover:bg-purple-600"
  },
  {
    title: "Online Consultants",
    image: SERVICE_IMAGES.onlineConsultants,
    description: "Connect with licensed healthcare professionals through our online consultation service. Whether you need medication guidance or health advice, our experts are here to help",
    bgColor: "bg-indigo-500",
    hoverColor: "hover:bg-indigo-600"
  }
];