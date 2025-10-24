export type TranslationKey = "EN" | "FR";

export const translations: Record<
  TranslationKey,
  {
    home: string;
    menu: string;
    about: string;
    contact: string;
    delivery: string;
    heroTitle: string;
    heroSubtitle: string;
    exploreMenu: string;
    menuTitle: string;
    aboutTitle: string;
    aboutText1: string;
    aboutText2: string;
    aboutText3: string;
    contactInfo: string;
    hours: string;
    followUs: string;
    orderNow: string;
    categories: Record<string, string>;
    items: Record<string, { name: string; description: string }>;
  }
> = {
  EN: {
    home: "home",
    menu: "menu",
    about: "about",
    contact: "contact",
    delivery: "delivery",
    heroTitle: "COQ ZONE",
    heroSubtitle: "Crispy Perfection. Every Bite!",
    exploreMenu: "Explore Our Menu",
    menuTitle: "Our Menu",
    aboutTitle: "About Coq Zone",
    aboutText1:
      "Welcome to Coq Zone, where crispy perfection meets bold flavors! We're passionate about serving the most delicious fried chicken, made with premium ingredients and cooked to golden perfection.",
    aboutText2:
      "From our signature chicken combos to our gourmet burgers and fresh bowls, every dish is crafted with care and attention to detail. Whether you're craving our famous crispy tenders or exploring our unique poutine creations, we guarantee a taste experience that will keep you coming back for more.",
    aboutText3:
      "Join us at Coq Zone - where every bite is a celebration of flavor!",
    contactInfo: "Contact Info",
    hours: "Hours",
    followUs: "Follow Us",
    orderNow: "Order Now",
    categories: {
      "CHICKEN TENDERS COMBOS": "CHICKEN TENDERS COMBOS",
      "CHICKEN WINGS": "CHICKEN WINGS",
      BURGERS: "BURGERS",
      "FRIED CHICKEN WRAPS": "FRIED CHICKEN WRAPS",
    },
    items: {
      Cmb3MCX: {
        name: "--",
        description: "--.",
      },
      Cmb5MCX: {
        name: "Combo 5 MCX Filets de Poulet",
        description: "--.",
      },
      Cmb7MCX: {
        name: "Combo 7 MCX Filets de Poulet",
        description: "--.",
      },
      Cmb10MCX: {
        name: "Combo 10 MCX Filets de Poulet",
        description: "--.",
      },
      "7Ws": {
        name: "7 Wings",
        description: "Sauce of your choice included.",
      },
      "7WsC": {
        name: "7 Wings Combo",
        description: "Sauce of your choice included + fries.",
      },
      "12Ws": {
        name: "12 Wings",
        description: "Sauce of your choice included.",
      },
      "12WsC": {
        name: "12 Wings Combo",
        description: "Sauce of your choice included + fries.",
      },
      "18Ws": {
        name: "18 Wings",
        description: "Sauce of your choice included.",
      },
      "18WsC": {
        name: "18 Wings Combo",
        description: "Sauce of your choice included + fries.",
      },
      "24Ws": {
        name: "24 Wings",
        description: "Sauce of your choice included.",
      },
      "24WsC": {
        name: "24 Wings Combo",
        description: "Sauce of your choice included + fries.",
      },
      "30Ws": {
        name: "30 Wings",
        description: "Sauce of your choice included.",
      },
      "30WsC": {
        name: "30 Wings Combo",
        description: "Sauce of your choice included + fries.",
      },
      bclassic: {
        name: "Classic Burger Coq Zone",
        description:
          "Crispy fried chicken, coleslaw, pickles, and Coq Zone sauce.",
      },
      bsweetchili: {
        name: "Burger Sweet Chili",
        description:
          "Crispy fried chicken, coleslaw, pickles, and sweet chili sauce.",
      },
      bspicy: {
        name: "Burger Spicy",
        description:
          "Spicy fried chicken, jalapeños, coleslaw, and homemade hot sauce.",
      },
      wburger: {
        name: "Wrap Burger",
        description:
          "Crispy fried chicken, cheddar cheese, fries, pickles, lettuce, and Coq Zone sauce.",
      },
      wclassic: {
        name: "Wrap Classic",
        description:
          "Crispy fried chicken, fries, pickles, lettuce, and Coq Zone sauce.",
      },
      wspicy: {
        name: "Wrap Spicy",
        description:
          "Spicy fried chicken, fries, jalapeños, lettuce, and homemade hot sauce.",
      },
    },
  },
  FR: {
    home: "accueil",
    menu: "menu",
    about: "à propos",
    contact: "contact",
    delivery: "livraison",
    heroTitle: "COQ ZONE",
    heroSubtitle: "Perfection Croustillante. À Chaque Bouchée!",
    exploreMenu: "Découvrir Notre Menu",
    menuTitle: "Notre Menu",
    aboutTitle: "À Propos de Coq Zone",
    aboutText1:
      "Bienvenue chez Coq Zone, où la perfection croustillante rencontre des saveurs audacieuses! Nous sommes passionnés par le service du poulet frit le plus délicieux, fait avec des ingrédients de première qualité et cuit à la perfection dorée.",
    aboutText2:
      "De nos combos de poulet signature à nos hamburgers gastronomiques et nos bols frais, chaque plat est préparé avec soin et attention aux détails. Que vous ayez envie de nos fameux tenders croustillants ou que vous exploriez nos créations uniques de poutine, nous garantissons une expérience gustative qui vous fera revenir.",
    aboutText3:
      "Rejoignez-nous chez Coq Zone - où chaque bouchée est une célébration de saveur!",
    contactInfo: "Informations de Contact",
    hours: "Heures",
    followUs: "Suivez-Nous",
    orderNow: "Commander Maintenant",
    categories: {
      "CHICKEN TENDERS COMBOS": "COMBO FILETS DE POULET",
      "CHICKEN WINGS": "AILES DE POULET",
      BURGERS: "BURGERS",
      "FRIED CHICKEN WRAPS": "WRAPS AU POULET FRIT",
    },
    items: {
      Cmb3MCX: {
        name: "Combo 3 MCX Filets de Poulet",
        description:
          "3 filets de poulet frit croustillants, servis avec des frites gaufrées dorées, salade de chou ou cornichons et sauce de votre choix.",
      },
      Cmb5MCX: {
        name: "Combo 5 MCX Filets de Poulet",
        description:
          "5 filets de poulet frit croustillants, servis avec des frites gaufrées dorées, salade de chou ou cornichons et sauce de votre choix.",
      },
      Cmb7MCX: {
        name: "Combo 7 MCX Filets de Poulet",
        description:
          "7 filets de poulet frit croustillants, servis avec des frites gaufrées dorées, salade de chou ou cornichons et sauce de votre choix.",
      },
      Cmb10MCX: {
        name: "Combo 10 MCX Filets de Poulet",
        description:
          "10 filets de poulet frit croustillants, servis avec des frites gaufrées dorées, salade de chou ou cornichons et sauce de votre choix.",
      },
      "Coq Zone Classic Burger": {
        name: "Coq Zone Classic Burger",
        description:
          "10 filets de poulet frit croustillants, servis avec des frites gaufrées dorées, salade de chou ou cornichons et sauce de votre choix.",
      },
      "7Ws": {
        name: "7 Ailes",
        description: "Choix de sauce inclus.",
      },
      "7WsC": {
        name: "7 Ailes Combo",
        description: "Choix de sauce + frites.",
      },
      "12Ws": {
        name: "12 Ailes",
        description: "Choix de sauce inclus.",
      },
      "12WsC": {
        name: "12 Ailes Combo",
        description: "Choix de sauce + frites.",
      },
      "18Ws": {
        name: "18 Ailes",
        description: "Choix de sauce inclus.",
      },
      "18WsC": {
        name: "18 Ailes Combo",
        description: "Choix de sauce + frites.",
      },
      "24Ws": {
        name: "24 Ailes",
        description: "Choix de sauce inclus.",
      },
      "24WsC": {
        name: "24 Ailes Combo",
        description: "Choix de sauce + frites.",
      },
      "30Ws": {
        name: "30 Ailes",
        description: "Choix de sauce inclus.",
      },
      "30WsC": {
        name: "30 Ailes Combo",
        description: "Choix de sauce + frites.",
      },
      bclassic: {
        name: "Burger Classique Coq Zone",
        description:
          "Poulet frit croustillant, salade de choux, cornichons et sauce Coq Zone.",
      },
      bsweetchili: {
        name: "Burger Piment Doux",
        description:
          "Poulet frit croustillant, salade de choux, cornichons et sauce sweet chili.",
      },
      bspicy: {
        name: "Burger Spicy",
        description:
          "Poulet frit épicé, jalapeños, salade de choux et sauce piquante maison.",
      },
      wburger: {
        name: "Wrap Burger",
        description:
          "Poulet frit croustillant, fromage cheddar, frites, cornichons, salade et sauce Coq Zone.",
      },
      wclassic: {
        name: "Wrap Classique",
        description:
          "Poulet frit croustillant, frites, cornichons, salade et sauce Coq Zone.",
      },
      wspicy: {
        name: "Wrap Épicé",
        description:
          "Poulet frit épicé, frites, jalapeños, salade et sauce piquante maison.",
      },
    },
  },
};
