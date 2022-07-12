import trust_badge from "./MainImages/trust_badge.png";
import yellowCherryTomatoes from "./MainImages/yellowCherryTomatoes.jpg";
import yellowCherryTomatoes1 from "./MainImages/yellowCherryTomatoes1.jpg";
import orangeCauliflower from "./MainImages/orangeCauliflower.jpg";
import orangeCauliflower1 from "./MainImages/orangeCauliflower1.jpg";
import miniPlumTomato from "./MainImages/miniPlumTomato.jpg";
import miniPlumTomato1 from "./MainImages/miniPlumTomato1.jpg";
import seedlessWhiteGrape from "./MainImages/seedlessWhiteGrape.jpg";
import seedlessWhiteGrape1 from "./MainImages/seedlessWhiteGrape1.jpg";
import pomegranate from "./MainImages/pomegranate.jpg";
import pomegranate1 from "./MainImages/pomegranate1.jpg";
import organicOavelOrangeAlmaverde from "./MainImages/organicOavelOrangeAlmaverde.jpg";
import organicOavelOrangeAlmaverde1 from "./MainImages/organicOavelOrangeAlmaverde1.jpg";
import freshStrawberries from "./MainImages/freshStrawberries.jpg";
import freshStrawberries1 from "./MainImages/freshStrawberries1.jpg";
import freshStrawberries2 from "./MainImages/freshStrawberries2.jpg";
import freshStrawberries3 from "./MainImages/freshStrawberries3.jpg";
import ApplesGranny from "./MainImages/ApplesGranny.jpg";
import ApplesGranny1 from "./MainImages/ApplesGranny1.jpg";
import ApplesGranny2 from "./MainImages/ApplesGranny2.jpg";
import OnionAlmaverde from "./MainImages/OnionAlmaverde.jpg";
import OnionAlmaverde1 from "./MainImages/OnionAlmaverde1.jpg";
import cabbageAlmaverde from "./MainImages/cabbageAlmaverde.jpg";
import cabbageAlmaverde1 from "./MainImages/cabbageAlmaverde1.jpg";
import lemonAlmaverde from "./MainImages/lemonAlmaverde.jpg";
import lemonAlmaverde1 from "./MainImages/lemonAlmaverde1.jpg";

// main obj

export let fruitObj = [
  {
    id: 1,
    name: "Cherry Tomatoes",
    img: [yellowCherryTomatoes, yellowCherryTomatoes1],
    from_price: 5.0,
    to_price: 12.0,
    total: {
      one_kg: 12.0,
      half_kg: 9.0,
      half_2_kg: 5.0,
    },
    discounted_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 48,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 12,
    sold_hours: 11,
    available: 59,
    star: 4,
    like: false,
  },
  {
    id: 2,
    name: "Orange Cauliflower",
    img: [orangeCauliflower, orangeCauliflower1],
    from_price: null,
    to_price: 10.0,
    total: {},
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 66,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 4,
    sold_hours: 6,
    available: null,
    star: 5,
    like: false,
  },
  {
    id: 3,
    name: "Plum Tomato",
    img: [miniPlumTomato, miniPlumTomato1],
    from_price: 8.0,
    to_price: 15.0,
    total: {
      one_kg: 15.0,
      half_kg: 11.0,
      half_2_kg: 8.0,
    },
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 31,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 2,
    sold_hours: 16,
    available: null,
    star: 3,
    like: false,
  },

  {
    id: 4,
    name: "White Grape",
    img: [seedlessWhiteGrape, seedlessWhiteGrape1],
    from_price: null,
    to_price: 15.0,
    total: {},
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 16,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 12,
    sold_hours: 13,
    available: null,
    star: 2,
    like: false,
  },
  {
    id: 5,
    name: "Pomegranate",
    img: [pomegranate, pomegranate1],
    from_price: 3.0,
    to_price: 8.0,
    total: {
      one_kg: 8.0,
      half_kg: 5.0,
      half_2_kg: 3.0,
    },
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 55,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 2,
    sold_hours: 14,
    available: null,
    star: 4,
    like: false,
  },
  {
    id: 6,
    name: "Navel Orange",
    img: [organicOavelOrangeAlmaverde, organicOavelOrangeAlmaverde1],
    from_price: null,
    to_price: 16.0,
    total: {},
    discount_price: 20.0,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 57,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 4,
    sold_hours: 17,
    available: 87,
    star: 4,
    like: false,
  },
  {
    id: 7,
    name: "Fresh Strawberries",
    img: [
      freshStrawberries,
      freshStrawberries1,
      freshStrawberries2,
      freshStrawberries3,
    ],
    from_price: null,
    to_price: 10.0,
    total: {},
    discount_price: 20.0,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 26,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 7,
    sold_hours: 12,
    available: 84,
    star: 5,
    like: false,
  },
  {
    id: 8,
    name: "Apples Granny",
    img: [ApplesGranny, ApplesGranny1, ApplesGranny2],
    from_price: null,
    to_price: 14.0,
    total: {},
    discount_price: 20.0,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 59,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 9,
    sold_hours: 12,
    available: null,
    star: 4,
    like: false,
  },
  {
    id: 9,
    name: "Red Onion",
    img: [OnionAlmaverde, OnionAlmaverde1],
    from_price: 6.0,
    to_price: 10.0,
    total: {
      half_kg: 10.0,
      half_2_kg: 6.0,
    },
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 21,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Vegetables",
    sold: 2,
    sold_hours: 11,
    available: null,
    star: 2,
    like: false,
  },
  {
    id: 10,
    name: "Red Cabbage",
    img: [cabbageAlmaverde, cabbageAlmaverde1],
    from_price: 9.0,
    to_price: 15.0,
    total: {
      half_kg: 15.0,
      half_kg: 9.0,
    },
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 67,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Vegetables",
    sold: 4,
    sold_hours: 8,
    available: null,
    star: 3,
    like: false,
  },
  {
    id: 11,
    name: "Organic Lemon",
    img: [lemonAlmaverde, lemonAlmaverde1],
    from_price: 11.0,
    to_price: 18.0,
    total: {
      one_kg: 18.0,
      half_kg: 15.0,
      half_kg: 9.0,
    },
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 39,
    Guaranteed: trust_badge,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Vegetables",
    sold: 1,
    sold_hours: 14,
    available: 80,
    star: 5,
    like: false,
  },
];
