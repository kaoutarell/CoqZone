import { TranslationKey } from "./translations";

export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

// Define the type of your translation object
interface Translation {
  categories: Record<string, string>;
  items: Record<string, { name: string; description: string }>;
}

export const getMenuCategories = (
  language: TranslationKey,
  t: Translation
): MenuCategory[] => [
  {
    title: t.categories["CHICKEN TENDERS COMBOS"],
    icon: "🍗",
    items: [
      {
        name: t.items["Cmb3MCX"].name,
        price: "$16.99",
        description: t.items["Cmb3MCX"].description,
      },
      {
        name: t.items["Cmb5MCX"].name,
        price: "$22.99",
        description: t.items["Cmb5MCX"].description,
      },
      {
        name: t.items["Cmb7MCX"].name,
        price: "$29.99",
        description: t.items["Cmb7MCX"].description,
      },
      {
        name: t.items["Cmb10MCX"].name,
        price: "$36.99",
        description: t.items["Cmb10MCX"].description,
      },
    ],
  },
  {
    title: t.categories["CHICKEN WINGS"],
    icon: "🍔",
    items: [
      {
        name: t.items["7Ws"].name,
        price: "$8.99",
        description: t.items["7Ws"].description,
      },
      {
        name: t.items["7WsC"].name,
        price: "$12.99",
        description: t.items["7WsC"].description,
      },
      {
        name: t.items["12Ws"].name,
        price: "$15.99",
        description: t.items["12Ws"].description,
      },
      {
        name: t.items["12WsC"].name,
        price: "$18.99",
        description: t.items["12WsC"].description,
      },
      {
        name: t.items["18Ws"].name,
        price: "$21.99",
        description: t.items["18Ws"].description,
      },
      {
        name: t.items["18WsC"].name,
        price: "$24.99",
        description: t.items["18WsC"].description,
      },
      {
        name: t.items["24Ws"].name,
        price: "$27.99",
        description: t.items["24Ws"].description,
      },
      {
        name: t.items["24WsC"].name,
        price: "$31.99",
        description: t.items["24WsC"].description,
      },
      {
        name: t.items["30Ws"].name,
        price: "$29.99",
        description: t.items["30Ws"].description,
      },
      {
        name: t.items["30WsC"].name,
        price: "$36.99",
        description: t.items["30WsC"].description,
      },
    ],
  },
  {
    title: t.categories["BURGERS"],
    icon: "🍚",
    items: [
      {
        name: t.items["bclassic"].name,
        price: "$8.99",
        description: t.items["bclassic"].description,
      },
      {
        name: t.items["bsweetchili"].name,
        price: "$9.99",
        description: t.items["bsweetchili"].description,
      },
      {
        name: t.items["bspicy"].name,
        price: "$10.99",
        description: t.items["bspicy"].description,
      },
    ],
  },
  {
    title: t.categories["FRIED CHICKEN WRAPS"],
    icon: "🌯",
    items: [
      {
        name: t.items["wburger"].name,
        price: "$10.95",
        description: t.items["wburger"].description,
      },
      {
        name: t.items["wclassic"].name,
        price: "$10.49",
        description: t.items["wclassic"].description,
      },
      {
        name: t.items["wspicy"].name,
        price: "$10.49",
        description: t.items["wspicy"].description,
      },
    ],
  },
];
