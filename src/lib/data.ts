import type { LatLngExpression } from "leaflet";
import cardImage1 from "../assets/card-1.jpg";
import cardImage2 from "../assets/card-2.jpg";
import cardImage3 from "../assets/card-3.jpg";

interface CampingSpot {
  id: number;
  place: string;
  campName: string;
  latLon: LatLngExpression;
  stationCode: string;
}

export const campingSpotsData: CampingSpot[] = [
  {
    id: 1,
    place: "Nagheds",
    campName: "FrostPeaks BaseCamp",
    latLon: [332, 172],
    stationCode: "PLX NAG 101",
  },
  {
    id: 2,
    place: "Zarthol",
    campName: "Cosmic Aurora Outpost",
    latLon: [234, 465],
    stationCode: "PLX ZAR 101",
  },
  {
    id: 3,
    place: "Pyokmart",
    campName: "ExploraTerra Base Camp",
    latLon: [93, 349],
    stationCode: "PLX PYO 101",
  },
];

export interface CardData {
  id: number;
  image: any;
  title: string;
  rating: number;
  description: string;
  views: string;
  likes: string;
  price: string;
  priceUnit: string;
  modalTitle: string;
  packagesExample: Array<{
    title: string;
    activities: string[];
    pricing: string;
  }>;
  videoLink: string;
}

export const cardsData: CardData[] = [
  {
    id: 1,
    image: cardImage1,
    title: "Special Private Tour",
    rating: 4,
    description:
      "Embark on an extraordinary cosmic camping experience. Whether it's a romantic getaway, a family adventure, or a solo exploration, our private tours offer an unforgettable escape. Explore alien landscapes at your pace, blending comfort and exploration. Your stellar journey awaits, creating timeless memories beyond Earth.",
    views: "1.8k",
    likes: "1.2k",
    price: "499.99",
    priceUnit: "person",
    modalTitle: "Special Private Tour",
    packagesExample: [
      {
        title: "Standard Package - Explorer's Retreat",
        activities: [
          "Private Tent Accommodation",
          "All Guided Tours and Activities",
          "Welcome Lunch, Dinners, and Breakfasts",
          "Stargazing Session",
          "Galactic Picnic Lunch",
          "Souvenir Package",
        ],
        pricing: "$499.99 per person",
      },
      {
        title: "Deluxe Package - Celestial Bliss",
        activities: [
          "Premium Tent Accommodation with Celestial Views",
          "All Standard Package Inclusions",
          "Private Interplanetary Geology Expedition",
          "Cosmic Culinary Class",
          "Cosmic Spa Experience",
          "Gourmet Galactic Dinner Upgrade",
        ],
        pricing: "$799.99 per person",
      },
      {
        title: "Ultimate Package - Cosmic Voyager",
        activities: [
          "Luxury Tent Accommodation with Exclusive Amenities",
          "All Deluxe Package Inclusions",
          "Personalized Private Tour Itinerary",
          "Additional Alien Flora Photography Workshop",
          "Exclusive Astrological Consultation",
          "VIP Shuttle Service",
        ],
        pricing: "$999.99 per person",
      },
    ],
    videoLink: "https://www.youtube.com/embed/G1hKzCkywM8?si=dCXrbUp5NRSX1yYO",
  },
  {
    id: 2,
    image: cardImage2,
    title: "Exclusive FrostPeaks Hike",
    rating: 5,
    description:
      "Embark on a thrilling group trek through the majestic FrostPeaks. Whether you're an avid explorer or a nature enthusiast, our guided hikes promise an unforgettable adventure. Immerse yourself in the breathtaking snowy landscapes, forging connections with fellow adventurers. Your journey through the FrostPeaks is sure to create lasting memories of camaraderie and exploration.",
    views: "1.2k",
    likes: "500",
    price: "899.99",
    priceUnit: "person",
    modalTitle: "Exclusive FrostPeaks Hike",
    packagesExample: [
      {
        title: "Included",
        activities: [
          "Guided Group Hike through FrostPeaks",
          "Specialized FrostPeaks Exploration Gear",
          "Hot Beverages and Snacks during the Hike",
          "Professional Photography Service",
          "Commemorative FrostPeaks Expedition Certificate",
          "Group Lunch at Summit",
          "Nature Walk Exploration Session",
          "Group Reflection and Debrief Session",
          "Experienced Guides and Safety Briefing",
        ],
        pricing: "$899.99 per person",
      },
      {
        title: "Optional Upgrades",
        activities: [
          "Exclusive FrostPeaks Hike Video Package",
          "FrostPeaks Hike Photography Package",
        ],
        pricing: "$49.99 per upgrade",
      },
    ],
    videoLink:
      "https://www.youtube-nocookie.com/embed/_RZm7E9E-CM?si=xFJV91yg6lG2WjrI",
  },
  {
    id: 3,
    image: cardImage3,
    title: "Zero-Gravity Sports Fusion",
    rating: 4,
    description:
      "Experience sports in a whole new dimension with our zero-gravity session. Whether you're a seasoned athlete or a novice explorer, our reduced-gravity arena opens doors to a unique, high-flying experience. Engage in various sports, defy traditional gravity, and elevate your play to extraordinary heights. Join us for a cosmic sporting adventure that transcends earthly limits, where every move becomes a moment of cosmic triumph",
    views: "5.4k",
    likes: "3.1k",
    price: "699.99",
    priceUnit: "person",
    modalTitle: "Zero-Gravity Sports Fusion",
    packagesExample: [
      {
        title: "Zero-Gravity Sports Fusion Session",
        activities: [
          "Registration and Orientation",
          "Futuristic Basketball Session",
          "Cosmic Soccer Game",
          "Galactic Volleyball Match",
          "Anti-Gravity Climbing Wall Challenge",
          "Zero-Gravity Trampoline Experience",
          "Zero-G Refreshment Break",
          "Cosmic Achievements Ceremony with Certificates",
          "Professional Instructors and Safety Equipment",
        ],
        pricing: "$699.99 per person",
      },
      {
        title: "Optional Upgrades",
        activities: ["Exclusive Zero-G Video Package", "Zero-G Photo Package"],
        pricing: "$49.99 per upgrade",
      },
    ],
    videoLink:
      "https://www.youtube-nocookie.com/embed/wuog9_p_ycc?si=QmxTdHWkzz3zblTJ",
  },
];

interface TravelFrom {
  id: number;
  place: string;
  stationCode: string;
}

export const travelFrom: TravelFrom[] = [
  {
    id: 1,
    place: "Tisa",
    stationCode: "ETH TIS 101",
  },
  {
    id: 2,
    place: "Lima",
    stationCode: "ETH LIM 101",
  },
  {
    id: 3,
    place: "Tokyo",
    stationCode: "ETH TOK 101",
  },
  {
    id: 4,
    place: "Paris",
    stationCode: "ETH PAR 101",
  },
];

export const seatsList = [
  { code: "A1", window: true },
  { code: "A2", window: false },
  { code: "B1", window: true },
  { code: "B2", window: false },
  { code: "C1", window: true },
  { code: "C2", window: false },
  { code: "D1", window: true },
  { code: "D2", window: false },
  { code: "E1", window: true },
  { code: "E2", window: false },
  { code: "A3", window: false },
  { code: "A4", window: true },
  { code: "B3", window: false },
  { code: "B4", window: true },
  { code: "C3", window: false },
  { code: "C4", window: true },
  { code: "D3", window: false },
  { code: "D4", window: true },
  { code: "E3", window: false },
  { code: "E4", window: true },
];
