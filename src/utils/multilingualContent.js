import { useContext } from "react";
import { LanguageContext } from "../index";
import { translations } from "./translations.js";

export default function MultiLingualContent({ contentID }) {
  const { language } = useContext(LanguageContext);

  return translations[language][contentID] ? translations[language][contentID] : "TRANSLATE ME :" + contentID;
}