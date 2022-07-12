import aloe1 from "./MainImages/aloe1.jpg";
import aloe2 from "./MainImages/aloe2.jpg";
import yellowCherryTomatoes from "./MainImages/yellowCherryTomatoes.jpg";
import yellowCherryTomatoes1 from "./MainImages/yellowCherryTomatoes1.jpg";
import miniPlumTomato from "./MainImages/miniPlumTomato.jpg";
import miniPlumTomato1 from "./MainImages/miniPlumTomato1.jpg";

import orangeCauliflower from "./MainImages/orangeCauliflower.jpg";
import orangeCauliflower1 from "./MainImages/orangeCauliflower1.jpg";

const dealObj = [
  {
    id: 1,
    name: "Aloe Arborescens",
    img: [
      aloe1, aloe2 
    ],
    from_price: 6.0,
    to_price: 8.0,
    total: {
      one_kg: 8.0,
      half_kg: 5.0,
      half_2_kg: 3.0,
    },
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 57,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Tree",
    sold: 7,
    sold_hours: 12,
    available: 8,
    star: 4,
    like: false,
    amount:1,
    day: 175,
    hour: 23,
    min: 43,
    sec: 12,
  },
  {
    id: 2,
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
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 12,
    sold_hours: 11,
    available: 59,
    star: 4,
    like: false,
    amount:1,
    day: 122,
    hour: 14,
    min: 32,
    sec: 13,
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
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Fruits",
    sold: 2,
    sold_hours: 16,
    available: 12,
    star: 3,
    like: false,
    amount:1,
    day: 223,
    hour: 17,
    min: 22,
    sec: 10,
  },

  {
    id: 4,
    name: "Orange Cauliflower",
    img: [orangeCauliflower, orangeCauliflower1],
    from_price: null,
    to_price: 10.0,
    total: {},
    discount_price: null,
    some_about:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    views: 66,
    Description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Vegetables",
    sold: 4,
    sold_hours: 6,
    available: 4,
    star: 5,
    like: false,
    amount:1,
    day: 111,
    hour: 16,
    min: 57,
    sec: 51,
  },
]

export default dealObj