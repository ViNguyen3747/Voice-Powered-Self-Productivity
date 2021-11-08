import Professional from "../images/professional.svg";
import Physical from "../images/physical.svg";
import Mental from "../images/mental.svg";
import Pratical from "../images/pratical.svg";
import Social from "../images/social.svg";
import Spiritual from "../images/spiritual.svg";
import Emotional from "../images/emotional.svg";

export const categoriesOptions = [
  {
    text: "Professional",
    value: "Professional",
    illustration: Professional,
    total: 0,
    color: "#AE2012",
  },
  {
    text: "Physical",
    value: "Physical",
    illustration: Physical,
    total: 0,
    color: "#005F73",
  },
  {
    text: "Pratical",
    value: "Pratical",
    illustration: Pratical,
    total: 0,
    color: "#606C38",
  },
  {
    text: "Social",
    value: "Social",
    illustration: Social,
    total: 0,
    color: "#FFCDB2",
  },
  {
    text: "Spiritual",
    value: "Spiritual",
    illustration: Spiritual,
    total: 0,
    color: "#335C67",
  },
  {
    text: "Mental/Intellectual",
    value: "Mental",
    illustration: Mental,
    total: 0,
    color: "#9D4EDD",
  },
  {
    text: "Emotional",
    value: "Emotional",
    illustration: Emotional,
    total: 0,
    color: "#1F1C1F",
  },
];

export const priorityOptions = [
  {
    color: "AF2020",
    colorText: "red",
    value: "A",
    text: "Urgent AND Important",
  },
  {
    color: "C25A16",
    colorText: "orange",
    value: "B",
    text: "Important NOT Urgent",
  },
  {
    color: "91A313",
    colorText: "olive",
    value: "C",
    text: "Urgent NOT Important",
  },
  {
    color: "00918A",
    colorText: "teal",
    value: "D",
    text: "NOT Urgent OR Important",
  },
];
