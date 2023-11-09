import type { LatLngExpression } from "leaflet";
import cardImage1 from "../assets/card-1.jpg";

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
    priceUnit: "person",
  },
];
