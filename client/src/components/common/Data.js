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
    color: "red",
    value: "A",
    text: "Urgent AND Important",
  },
  {
    color: "orange",
    value: "B",
    text: "Important NOT Urgent",
  },
  {
    color: "olive",
    value: "C",
    text: "Urgent NOT Important",
  },
  {
    color: "teal",
    value: "D",
    text: "NOT Urgent OR Important",
  },
];
