import Professional from "../images/professional.svg";
import Physical from "../images/physical.svg";
import Mental from "../images/mental.svg";
import Pratical from "../images/pratical.svg";
import Social from "../images/social.svg";
import Spiritual from "../images/spiritual.svg";
import Emotional from "../images/spiritual.svg";

export const categoriesOptions = [
  { text: "Professional", value: "Professional", illustration: Professional },
  { text: "Physical", value: "Physical", illustration: Physical },
  { text: "Pratical", value: "Pratical", illustration: Pratical },
  { text: "Social", value: "Social", illustration: Social },
  { text: "Spiritual", value: "Spiritual", illustration: Spiritual },
  { text: "Mental/Intellectual", value: "Mental", illustration: Mental },
  { text: "Emotional", value: "Emotional", illustration: Emotional },
];

export const priorityOptions = [
  {
    color: "AF2020",
    value: "A",
    text: "Urgent AND Important",
  },
  {
    color: "C25A16",
    value: "B",
    text: "Important NOT Urgent",
  },
  {
    color: "91A313",
    value: "C",
    text: "Urgent NOT Important",
  },
  {
    color: "00918A",
    value: "D",
    text: "NOT Urgent OR Important",
  },
];
