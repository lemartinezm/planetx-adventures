import type { LatLngExpression } from "leaflet";
import cardImage1 from "../assets/card-1.jpg";
import cardImage2 from "../assets/card-2.jpg";
import cardImage3 from "../assets/card-3.jpg";

interface CampingSpot {
  id: number;
  place: string;
  campName: string;
  latLon: LatLngExpression;
}

export const campingSpotsData: CampingSpot[] = [
  {
    id: 1,
    place: "Nagheds",
    campName: "FrostPeaks BaseCamp",
    latLon: [332, 172],
  },
  {
    id: 2,
    place: "Zarthol",
    campName: "Cosmic Aurora Outpost",
    latLon: [234, 465],
  },
  {
    id: 3,
    place: "Pyokmart",
    campName: "ExploraTerra Base Camp",
    latLon: [93, 349],
  },
];

interface CardData {
  image: any;
  title: string;
  rating: number;
  description: string;
  views: string;
  likes: string;
  price: string;
  priceUnit: string;
}

export const cardsData: CardData[] = [
  {
    image: cardImage1,
    title: "Special Private Tour",
    rating: 4,
    description:
      "Embark on an extraordinary cosmic camping experience. Whether it's a romantic getaway, a family adventure, or a solo exploration, our private tours offer an unforgettable escape. Explore alien landscapes at your pace, blending comfort and exploration. Your stellar journey awaits, creating timeless memories beyond Earth.",
    views: "1.8k",
    likes: "1.2k",
    price: "499.99",
    priceUnit: "day",
  },
  {
    image: cardImage2,
    title: "Exclusive FrostPeaks Hike",
    rating: 5,
    description:
      "Embark on a thrilling group trek through the majestic FrostPeaks. Whether you're an avid explorer or a nature enthusiast, our guided hikes promise an unforgettable adventure. Immerse yourself in the breathtaking snowy landscapes, forging connections with fellow adventurers. Your journey through the FrostPeaks is sure to create lasting memories of camaraderie and exploration.",
    views: "1.2k",
    likes: "500",
    price: "899.99",
    priceUnit: "person",
  },
  {
    image: cardImage3,
    title: "Zero-Gravity Sports Fusion",
    rating: 4,
    description:
      "Experience sports in a whole new dimension with our zero-gravity session. Whether you're a seasoned athlete or a novice explorer, our reduced-gravity arena opens doors to a unique, high-flying experience. Engage in various sports, defy traditional gravity, and elevate your play to extraordinary heights. Join us for a cosmic sporting adventure that transcends earthly limits, where every move becomes a moment of cosmic triumph",
    views: "5.4k",
    likes: "3.1k",
    price: "699.99",
    priceUnit: "person",
  },
];
