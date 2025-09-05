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
    heroSubtitle: "Crispy Perfection, Every Bite!",
    exploreMenu: "Explore Our Menu",
    menuTitle: "Our Delicious Menu",
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
      "Chicken Combos": "Chicken Combos",
      "Gourmet Burgers": "Gourmet Burgers",
      "Fresh Bowls": "Fresh Bowls",
      "Wings & Fries": "Wings & Fries",
      "Gourmet Poutines": "Gourmet Poutines",
      "Wraps & Tacos": "Wraps & Tacos",
    },
    items: {
      "Snack Pack (3pcs)": {
        name: "Snack Pack (3pcs)",
        description:
          "3 crispy fried chicken tenders with golden waffle fries, fresh coleslaw, and your choice of sauce.",
      },
      "Crispy Classic (5pcs)": {
        name: "Crispy Classic (5pcs)",
        description:
          "5 crispy fried chicken tenders with golden waffle fries, fresh coleslaw, and your choice of sauce.",
      },
      "Family Feast (10pcs)": {
        name: "Family Feast (10pcs)",
        description:
          "10 crispy fried chicken tenders with golden waffle fries, fresh coleslaw, and your choice of sauce.",
      },
      "Coq Zone Classic Burger": {
        name: "Coq Zone Classic Burger",
        description:
          "Crispy fried chicken fillet with fresh coleslaw, pickles, and our signature Coq Zone sauce on a soft brioche bun.",
      },
      "Sweet Chili Burger": {
        name: "Sweet Chili Burger",
        description:
          "Crispy fried chicken with fresh coleslaw, crunchy pickles and sweet chili sauce.",
      },
      "Spicy Burger": {
        name: "Spicy Burger",
        description:
          "Spicy fried chicken with jalapeños, fresh coleslaw and homemade hot sauce.",
      },
      "Pocoq Zone Bowl": {
        name: "Pocoq Zone Bowl",
        description:
          "Fluffy rice with golden fried chicken, crunchy edamame, shredded carrots, fresh cucumbers and sauce.",
      },
      "Rice and Chicken Bowl": {
        name: "Rice and Chicken Bowl",
        description:
          "Fluffy rice topped with golden fried chicken pieces and served with sauce.",
      },
      "Fries and Chicken Bowl": {
        name: "Fries and Chicken Bowl",
        description:
          "Crispy fries topped with golden fried chicken pieces and served with sauce.",
      },
      "Solo Box (7pcs)": {
        name: "Solo Box (7pcs)",
        description:
          "7 wings served with perfectly golden fries and your favorite sauce.",
      },
      "Duo Pack (12pcs)": {
        name: "Duo Pack (12pcs)",
        description:
          "12 wings served with perfectly golden fries and your favorite sauce.",
      },
      "Party Pack (24pcs)": {
        name: "Party Pack (24pcs)",
        description:
          "24 wings served with perfectly golden fries and your favorite sauce.",
      },
      "Classic Poutine": {
        name: "Classic Poutine",
        description:
          "Crispy fries with fresh cheese curds and our homemade brown gravy.",
      },
      "Coq Zone Poutine": {
        name: "Coq Zone Poutine",
        description:
          "Crispy fries with golden fried chicken, fresh cheese curds and our signature coq zone sauce.",
      },
      "Buffalo Chicken Poutine": {
        name: "Buffalo Chicken Poutine",
        description:
          "Crispy fries with fresh cheese curds and fried chicken coated in spicy buffalo sauce.",
      },
      "Classic Chicken Wrap": {
        name: "Classic Chicken Wrap",
        description:
          "Delicious wrap filled with Coq Zone fried chicken, fresh veggies, and house-made sauces.",
      },
      "Buffalo Chicken Taco": {
        name: "Buffalo Chicken Taco",
        description:
          "Soft tortilla with fried chicken in spicy Buffalo sauce, fresh coleslaw and pickles.",
      },
      "Supreme Taco": {
        name: "Supreme Taco",
        description:
          "Generous taco with fried chicken, coleslaw, pickles, jalapeños, and our signature sauce.",
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
    heroSubtitle: "Perfection Croustillante, À Chaque Bouchée!",
    exploreMenu: "Découvrir Notre Menu",
    menuTitle: "Notre Délicieux Menu",
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
      "Chicken Combos": "Combos de Poulet",
      "Gourmet Burgers": "Hamburgers Gastronomiques",
      "Fresh Bowls": "Bols Frais",
      "Wings & Fries": "Ailes et Frites",
      "Gourmet Poutines": "Poutines Gastronomiques",
      "Wraps & Tacos": "Wraps et Tacos",
    },
    items: {
      "Snack Pack (3pcs)": {
        name: "Collation (3mcx)",
        description:
          "3 lanières de poulet frit croustillant avec frites gaufrées dorées, salade de chou fraîche et votre choix de sauce.",
      },
      "Crispy Classic (5pcs)": {
        name: "Classique Croustillant (5mcx)",
        description:
          "5 lanières de poulet frit croustillant avec frites gaufrées dorées, salade de chou fraîche et votre choix de sauce.",
      },
      "Family Feast (10pcs)": {
        name: "Festin Familial (10mcx)",
        description:
          "10 lanières de poulet frit croustillant avec frites gaufrées dorées, salade de chou fraîche et votre choix de sauce.",
      },
      "Coq Zone Classic Burger": {
        name: "Hamburger Classique Coq Zone",
        description:
          "Filet de poulet frit croustillant avec salade de chou fraîche, cornichons et notre sauce signature Coq Zone sur un pain brioche moelleux.",
      },
      "Sweet Chili Burger": {
        name: "Hamburger Chili Doux",
        description:
          "Poulet frit croustillant avec salade de chou fraîche, cornichons croquants et sauce chili douce.",
      },
      "Spicy Burger": {
        name: "Hamburger Épicé",
        description:
          "Poulet frit épicé avec jalapeños, salade de chou fraîche et sauce piquante maison.",
      },
      "Pocoq Zone Bowl": {
        name: "Bol Pocoq Zone",
        description:
          "Riz moelleux avec poulet frit doré, edamame croquant, carottes râpées, concombres frais et sauce.",
      },
      "Rice and Chicken Bowl": {
        name: "Bol Riz et Poulet",
        description:
          "Riz moelleux garni de morceaux de poulet frit doré et servi avec sauce.",
      },
      "Fries and Chicken Bowl": {
        name: "Bol Frites et Poulet",
        description:
          "Frites croustillantes garnies de morceaux de poulet frit doré et servies avec sauce.",
      },
      "Solo Box (7pcs)": {
        name: "Boîte Solo (7mcx)",
        description:
          "7 ailes servies avec frites parfaitement dorées et votre sauce préférée.",
      },
      "Duo Pack (12pcs)": {
        name: "Pack Duo (12mcx)",
        description:
          "12 ailes servies avec frites parfaitement dorées et votre sauce préférée.",
      },
      "Party Pack (24pcs)": {
        name: "Pack Fête (24mcx)",
        description:
          "24 ailes servies avec frites parfaitement dorées et votre sauce préférée.",
      },
      "Classic Poutine": {
        name: "Poutine Classique",
        description:
          "Frites croustillantes avec fromage en grains frais et notre sauce brune maison.",
      },
      "Coq Zone Poutine": {
        name: "Poutine Coq Zone",
        description:
          "Frites croustillantes avec poulet frit doré, fromage en grains frais et notre sauce signature coq zone.",
      },
      "Buffalo Chicken Poutine": {
        name: "Poutine Poulet Buffalo",
        description:
          "Frites croustillantes avec fromage en grains frais et poulet frit enrobé de sauce buffalo épicée.",
      },
      "Classic Chicken Wrap": {
        name: "Wrap Poulet Classique",
        description:
          "Délicieux wrap rempli de poulet frit Coq Zone, légumes frais et sauces maison.",
      },
      "Buffalo Chicken Taco": {
        name: "Taco Poulet Buffalo",
        description:
          "Tortilla molle avec poulet frit en sauce Buffalo épicée, salade de chou fraîche et cornichons.",
      },
      "Supreme Taco": {
        name: "Taco Suprême",
        description:
          "Taco généreux avec poulet frit, salade de chou, cornichons, jalapeños et notre sauce signature.",
      },
    },
  },
};
