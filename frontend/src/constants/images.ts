// Product Images
import paracetamolImg from '../assets/images/products/featured/paracetamol.png';
import vitamincImg from '../assets/images/products/featured/vitaminC.png';
import amoxicillinImg from '../assets/images/products/featured/amoxicillin.png';
import omega3Img from '../assets/images/products/featured/omega3_fish_oil.png';
import bifidoPlusImg from '../assets/images/products/featured/bifido_plus.png'; 
import canxiImg from '../assets/images/products/featured/canxi.png';
import ironImg from '../assets/images/products/featured/iron.png';
import multivitaminImg from '../assets/images/products/featured/multivitamin.png';

// Service Images
import onlinePharmacyImg from '../assets/images/services/online_pharamcy.png';
import prescriptionImg from '../assets/images/services/prescription.png';
import vaccineImg from '../assets/images/services/vaccine.png';
import onlineConsultantsImg from '../assets/images/services/online_consultants.png';

// Category Images
import prescriptionDrugsImg from '../assets/images/products/categories/prescription_drugs.png';
import supplementImg from '../assets/images/products/categories/supplement.png';
import personalCareImg from '../assets/images/products/categories/personal_care.png';
import babyMomImg from '../assets/images/products/categories/baby_mom.png';
import medicalDeviceImg from '../assets/images/products/categories/medical_device.png';
import traditionalMedicineImg from '../assets/images/products/categories/traditional_medicine.png';

// Health Tips Images
import tips1Img from '../assets/images/health_tips/tips1.jpeg';
import tips2Img from '../assets/images/health_tips/tips2.jpeg';
import tips3Img from '../assets/images/health_tips/tips3.jpeg';
import tips4Img from '../assets/images/health_tips/tips4.jpeg';

// Testimonial Images
import person1Img from '../assets/images/testimonials/1stperson.jpeg';
import person2Img from '../assets/images/testimonials/2ndperson.jpeg';
import person3Img from '../assets/images/testimonials/3rdperson.jpeg';

// Contact Us Images
import contactUsImg from '../assets/images/contact_us/call.png';

// Hero Images
import heroImg from '../assets/images/hero/heroimg.jpeg';

export const PRODUCT_IMAGES = {
  paracetamol: paracetamolImg,
  vitaminC: vitamincImg,
  amoxicillin: amoxicillinImg,
  omega3: omega3Img,
  bifidoPlus: bifidoPlusImg,
  canxi: canxiImg,
  iron: ironImg,
  multivitamin: multivitaminImg,
};

// Hero Images
export const HERO_IMAGES = {
  pharmacy: heroImg,
};

// Service Images
export const SERVICE_IMAGES = {
  onlinePharmacy: onlinePharmacyImg,
  prescription: prescriptionImg,
  vaccine: vaccineImg,
  onlineConsultants: onlineConsultantsImg, // Using consultants image for online consultants
};

// Health Tips Images (placeholder for future use)
export const HEALTH_TIP_IMAGES = {
    tips1: tips1Img,
    tips2: tips2Img,
    tips3: tips3Img,
    tips4: tips4Img,
  // nutrition: nutritionTipImg,
  // exercise: exerciseTipImg,
  // mentalHealth: mentalHealthImg,
};

// Testimonial Images
export const TESTIMONIAL_IMAGES = {
  person1: person1Img,
  person2: person2Img,
  person3: person3Img,
};

// Category Images
export const CATEGORY_IMAGES = {
  prescriptionDrugs: prescriptionDrugsImg,
  vitaminsSupplements: supplementImg,
  personalCare: personalCareImg,
  babyMom: babyMomImg,
  medicalDevices: medicalDeviceImg,
  traditionalMedicine: traditionalMedicineImg,
  // For categories without specific images, we'll reuse existing ones
  firstAid: medicalDeviceImg, // Reuse medical device image
  nutrition: supplementImg, // Reuse supplement image
};

export const CONTACTUS_IMAGES = {
 contactUs: contactUsImg
}