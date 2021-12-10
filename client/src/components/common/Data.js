import Professional from "../images/categories/professional.svg";
import Physical from "../images/categories/physical.svg";
import Mental from "../images/categories/mental.svg";
import Pratical from "../images/categories/pratical.svg";
import Social from "../images/categories/social.svg";
import Spiritual from "../images/categories/spiritual.svg";
import Emotional from "../images/categories/emotional.svg";
import levelA from "../images/prioritylevel/1.png";
import levelB from "../images/prioritylevel/2.png";
import levelC from "../images/prioritylevel/3.png";
import levelD from "../images/prioritylevel/4.png";

export const categoriesOptions = [
  {
    key: "Professional",
    text: "Professional",
    value: "Professional",
    illustration: Professional,
    total: 0,
    color: "#F94144",
  },
  {
    key: "Physical",
    text: "Physical",
    value: "Physical",
    illustration: Physical,
    total: 0,
    color: "#F3722C",
  },
  {
    key: "Pratical",
    text: "Pratical",
    value: "Pratical",
    illustration: Pratical,
    total: 0,
    color: "#F9C74F",
  },
  {
    key: "Social",
    text: "Social",
    value: "Social",
    illustration: Social,
    total: 0,
    color: "#90BE6D",
  },
  {
    key: "Spiritual",
    text: "Spiritual",
    value: "Spiritual",
    illustration: Spiritual,
    total: 0,
    color: "#43AA8B",
  },
  {
    key: "Mental",
    text: "Mental/Intellectual",
    value: "Mental",
    illustration: Mental,
    total: 0,
    color: "#4D908E",
  },
  {
    key: "Emotional",
    text: "Emotional",
    value: "Emotional",
    illustration: Emotional,
    total: 0,
    color: "#577590",
  },
];

export const weeklyCategoriesOptions = [
  {
    key: "Professional",
    text: "Professional",
    value: "Professional",
    total: 0,
    color: "#F94144",
  },
  {
    key: "Physical",
    text: "Physical",
    value: "Physical",
    total: 0,
    color: "#F3722C",
  },
  {
    key: "Pratical",
    text: "Pratical",
    value: "Pratical",
    total: 0,
    color: "#F9C74F",
  },
  {
    key: "Social",
    text: "Social",
    value: "Social",
    total: 0,
    color: "#90BE6D",
  },
  {
    key: "Spiritual",
    text: "Spiritual",
    value: "Spiritual",
    total: 0,
    color: "#43AA8B",
  },
  {
    key: "Mental",
    text: "Mental/Intellectual",
    value: "Mental",
    total: 0,
    color: "#4D908E",
  },
  {
    key: "Emotional",
    text: "Emotional",
    value: "Emotional",
    total: 0,
    color: "#577590",
  },
];

export const priorityOptions = [
  {
    key: "A",
    color: "AF2020",
    colorText: "red",
    value: "A",
    text: "Urgent AND Important",
    image: { avatar: true, src: levelA },
  },
  {
    key: "B",
    color: "C25A16",
    colorText: "orange",
    value: "B",
    text: "Important NOT Urgent",
    image: { avatar: true, src: levelB },
  },
  {
    key: "C",
    color: "91A313",
    colorText: "olive",
    value: "C",
    text: "Urgent NOT Important",
    image: { avatar: true, src: levelC },
  },
  {
    key: "D",
    color: "00918A",
    colorText: "teal",
    value: "D",
    text: "NOT Urgent OR Important",
    image: { avatar: true, src: levelD },
  },
];
