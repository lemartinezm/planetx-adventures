import type { LatLngExpression } from "leaflet";

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
