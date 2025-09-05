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

export const getMenuCategories = (
  language: TranslationKey,
  t: any
): MenuCategory[] => [
  {
    title: t.categories["Chicken Combos"],
    icon: "🍗",
    items: [
      {
        name: t.items["Snack Pack (3pcs)"].name,
        price: "$12.99",
        description: t.items["Snack Pack (3pcs)"].description,
      },
      {
        name: t.items["Crispy Classic (5pcs)"].name,
        price: "$18.99",
        description: t.items["Crispy Classic (5pcs)"].description,
      },
      {
        name: t.items["Family Feast (10pcs)"].name,
        price: "$32.99",
        description: t.items["Family Feast (10pcs)"].description,
      },
    ],
  },
  {
    title: t.categories["Gourmet Burgers"],
    icon: "🍔",
    items: [
      {
        name: t.items["Coq Zone Classic Burger"].name,
        price: "$14.99",
        description: t.items["Coq Zone Classic Burger"].description,
      },
      {
        name: t.items["Sweet Chili Burger"].name,
        price: "$15.99",
        description: t.items["Sweet Chili Burger"].description,
      },
      {
        name: t.items["Spicy Burger"].name,
        price: "$15.99",
        description: t.items["Spicy Burger"].description,
      },
    ],
  },
  {
    title: t.categories["Fresh Bowls"],
    icon: "🍚",
    items: [
      {
        name: t.items["Pocoq Zone Bowl"].name,
        price: "$13.99",
        description: t.items["Pocoq Zone Bowl"].description,
      },
      {
        name: t.items["Rice and Chicken Bowl"].name,
        price: "$11.99",
        description: t.items["Rice and Chicken Bowl"].description,
      },
      {
        name: t.items["Fries and Chicken Bowl"].name,
        price: "$12.99",
        description: t.items["Fries and Chicken Bowl"].description,
      },
    ],
  },
  {
    title: t.categories["Wings & Fries"],
    icon: "🔥",
    items: [
      {
        name: t.items["Solo Box (7pcs)"].name,
        price: "$12.99",
        description: t.items["Solo Box (7pcs)"].description,
      },
      {
        name: t.items["Duo Pack (12pcs)"].name,
        price: "$19.99",
        description: t.items["Duo Pack (12pcs)"].description,
      },
      {
        name: t.items["Party Pack (24pcs)"].name,
        price: "$34.99",
        description: t.items["Party Pack (24pcs)"].description,
      },
    ],
  },
  {
    title: t.categories["Gourmet Poutines"],
    icon: "🍟",
    items: [
      {
        name: t.items["Classic Poutine"].name,
        price: "$9.99",
        description: t.items["Classic Poutine"].description,
      },
      {
        name: t.items["Coq Zone Poutine"].name,
        price: "$14.99",
        description: t.items["Coq Zone Poutine"].description,
      },
      {
        name: t.items["Buffalo Chicken Poutine"].name,
        price: "$15.99",
        description: t.items["Buffalo Chicken Poutine"].description,
      },
    ],
  },
  {
    title: t.categories["Wraps & Tacos"],
    icon: "🌯",
    items: [
      {
        name: t.items["Classic Chicken Wrap"].name,
        price: "$11.99",
        description: t.items["Classic Chicken Wrap"].description,
      },
      {
        name: t.items["Buffalo Chicken Taco"].name,
        price: "$4.99",
        description: t.items["Buffalo Chicken Taco"].description,
      },
      {
        name: t.items["Supreme Taco"].name,
        price: "$5.99",
        description: t.items["Supreme Taco"].description,
      },
    ],
  },
];
