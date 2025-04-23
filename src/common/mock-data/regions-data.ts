import zaunImg from "@/common/img/zaun.jpg";
import zaunIcon from "@/common/img/zaun_crest_icon.png";

import piltoverImg from "@/common/img/piltover.jpg";
import piltoverIcon from "@/common/img/piltover_crest_icon.png";

import shadowIslesImg from "@/common/img/shadow_isles.jpg";
import shadowIslesIcon from "@/common/img/shadow_isles_crest_icon.png";

import demaciaImg from "@/common/img/demacia.jpg";
import demaciaIcon from "@/common/img/demacia_crest_icon.png";

import shurimaImg from "@/common/img/shurima.jpg";
import shurimaIcon from "@/common/img/shurima_crest_icon.png";

import freljordImg from "@/common/img/freljord.jpg";
import freljordIcon from "@/common/img/freljord_crest_icon.png";

import runeterraImg from "@/common/img/runeterra.jpg";
import runeterraIcon from "@/common/img/default_emblem.png";

import ioniaImg from "@/common/img/ionia.jpg";
import ioniaIcon from "@/common/img/iona_crest_icon.png";

import voidImg from "@/common/img/the_void.jpg";
import voidIcon from "@/common/img/void_crest_icon.png";

import targonImg from "@/common/img/targon.jpg";
import targonIcon from "@/common/img/mt_targon_crest_icon.png";

export interface RegionEntity {
  id: number;
  name: string;
  img: string;
  iconImg: string;
  selected: boolean;
}

export const REGIONSDATA: RegionEntity[] = [
  {
    id: 18,
    name: "Zaun",
    img: zaunImg,
    iconImg: zaunIcon,
    selected: false,
  },
  {
    id: 15,
    name: "Piltover",
    img: piltoverImg,
    iconImg: piltoverIcon,
    selected: false,
  },
  {
    id: 17,
    name: "Shadow Isles",
    img: shadowIslesImg,
    iconImg: shadowIslesIcon,
    selected: false,
  },
  {
    id: 20,
    name: "Demacia",
    img: demaciaImg,
    iconImg: demaciaIcon,
    selected: false,
  },
  {
    id: 21,
    name: "Shurima",
    img: shurimaImg,
    iconImg: shurimaIcon,
    selected: false,
  },
  {
    id: 14,
    name: "Freljord",
    img: freljordImg,
    iconImg: freljordIcon,
    selected: false,
  },
  {
    id: 16,
    name: "Runeterra",
    img: runeterraImg,
    iconImg: runeterraIcon,
    selected: false,
  },
  {
    id: 13,
    name: "Ionia",
    img: ioniaImg,
    iconImg: ioniaIcon,
    selected: false,
  },
  {
    id: 19,
    name: "The Void",
    img: voidImg,
    iconImg: voidIcon,
    selected: false,
  },
  {
    id: 22,
    name: "Targon",
    img: targonImg,
    iconImg: targonIcon,
    selected: false,
  },
];
