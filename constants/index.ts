import { Ionicons } from "@expo/vector-icons";
import sateBandeng from "@/assets/images/sate-bandeng.png";
import abonBandeng from "@/assets/images/abon-bandeng.png";
import empingMelinjo from "@/assets/images/emping-melinjo.png";
import gipang from "@/assets/images/gipang.png";
import bontot from "@/assets/images/bontot.png";

export interface Category {
    id: string;
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
}

// Categories with icon
export const CATEGORIES: Category[] = [
    {
        id: "1",
        name: "Bandeng",
        icon: "fish"
    },

    {
        id: "2",
        name: "Emping",
        icon: "leaf"
    },

    {
        id: "3",
        name: "Gipang",
        icon: "grid"
    },

    {
        id: "4",
        name: "Bontot",
        icon: "flame"
    },
];

export const offers = [
    {
        id: 1,
        title: "SUPER COMBO",
        image: sateBandeng,
        color: "#D33B0D"
    },

    {
        id: 2,
        title: "TOPPING DELIGHT",
        image: abonBandeng,
        color: "#DF5A0C"
    },

    {
        id: 3,
        title: "SNACKS",
        image: empingMelinjo,
        color: "#084137"
    },

    {
        id: 4,
        title: "SNACK PACK",
        image: gipang,
        color: "#EB920C"
    },

    {
        id: 5,
        title: "EASY MEAL",
        image: bontot,
        color: "#EB920C"
    },

];

export const PRODUCTS = [
    {
        id: "1",
        name: "Sate Bandeng",
        price: 30000,
        image: sateBandeng
    },

    {
        id: "2",
        name: "Abon Bandeng",
        price: 20000,
        image: abonBandeng
    },

    {
        id: "3",
        name: "Emping Melinjo",
        price: 15000,
        image: empingMelinjo
    },

    {
        id: "4",
        name: "Gipang",
        price: 10000,
        image: gipang
    },

    {
        id: "5",
        name: "Bontot",
        price: 25000,
        image: bontot
    },

];

export const images = {
    sateBandeng,
    abonBandeng,
    empingMelinjo,
    gipang,
    bontot,
};
