import ahriImg from "@/common/img/ahri.jpg";
import asheImg from "@/common/img/ashe.jpg";
import caitlynImg from "@/common/img/caitlyn.jpg";
import evelynnImg from "@/common/img/evelynn.jpg";
import gwenImg from "@/common/img/gwen.jpg";
import jinxImg from "@/common/img/jinx.jpg";
import kaisaImg from "@/common/img/kaisa.jpg";
import kindredImg from "@/common/img/kindred.jpg";
import morganaImg from "@/common/img/morgana.jpg";
import pantheonImg from "@/common/img/pantheon.jpg";
import renataImg from "@/common/img/renata.jpg";
import urgotImg from "@/common/img/urgot.jpg";

export interface ChampionEntity {
  id: number;
  name: string;
  location: string;
  img: string;
  bgPosition: string;
  selected: boolean;
}

export type EntityType = "champion" | "region";

export interface CartEntity {
  id: number;
  entityType: EntityType;
  name: string;
  img: string;
}

export const CHAMPIONDATA: ChampionEntity[] = [
  {
    id: 1,
    name: "Ahri",
    location: "Ionia",
    img: ahriImg,
    bgPosition: "67.4897% 14.6444%",
    selected: false,
  },
  {
    id: 2,
    name: "Ashe",
    location: "Freljord",
    img: asheImg,
    bgPosition: "69.4271% 5.44148%",
    selected: false,
  },
  {
    id: 3,
    name: "Caitlyn",
    location: "Piltover",
    img: caitlynImg,
    bgPosition: "84.2798% 0.97629%",
    selected: false,
  },
  {
    id: 4,
    name: "Evelynn",
    location: "Runeterra",
    img: evelynnImg,
    bgPosition: "51.1979% 11.6505%",
    selected: false,
  },
  {
    id: 5,
    name: "Gwen",
    location: "Shadow Isles",
    img: gwenImg,
    bgPosition: "50% 21.1827%",
    selected: false,
  },
  {
    id: 6,
    name: "Jinx",
    location: "Zaun",
    img: jinxImg,
    bgPosition: "74.1564% 11.4365%",
    selected: false,
  },
  {
    id: 7,
    name: "Kai'sa",
    location: "The Void",
    img: kaisaImg,
    bgPosition: "49.4792% 17.6523%",
    selected: false,
  },
  {
    id: 8,
    name: "Kindred",
    location: "Runeterra",
    img: kindredImg,
    bgPosition: "80.9053% 30.6834%",
    selected: false,
  },
  {
    id: 9,
    name: "Morgana",
    location: "Demacia",
    img: morganaImg,
    bgPosition: "88.7962% 49.2602%",
    selected: false,
  },
  {
    id: 10,
    name: "Pantheon",
    location: "Targon",
    img: pantheonImg,
    bgPosition: "51.4815% 36.1068%",
    selected: false,
  },
  {
    id: 11,
    name: "Renata Glasc",
    location: "Zaun",
    img: renataImg,
    bgPosition: "52.0833% 13.8889%",
    selected: false,
  },
  {
    id: 12,
    name: "Urgot",
    location: "Zaun",
    img: urgotImg,
    bgPosition: "56.4609% 5.5788%",
    selected: false,
  },
];
