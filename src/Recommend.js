import yellowCherryTomatoes from "./Objects/FruitObj/MainImages/yellowCherryTomatoes.jpg";
import yellowCherryTomatoes1 from "./Objects/FruitObj/MainImages/yellowCherryTomatoes1.jpg";
import orangeCauliflower from "./Objects/FruitObj/MainImages/orangeCauliflower.jpg";
import orangeCauliflower1 from "./Objects/FruitObj/MainImages/orangeCauliflower1.jpg";
import seedlessWhiteGrape from "./Objects/FruitObj/MainImages/seedlessWhiteGrape.jpg";
import seedlessWhiteGrape1 from "./Objects/FruitObj/MainImages/seedlessWhiteGrape1.jpg";
import trust_badge from "./Objects/FruitObj/MainImages/trust_badge.png";


export const recommended = [
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
]