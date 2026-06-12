import { useRouter } from "next/router";
import en from "../../public/locales/en/common.json";
import ru from "../../public/locales/ru/common.json";
import hy from "../../public/locales/hy/common.json";

const dictionaries = { en, ru, hy };

export function useT() {
  const router = useRouter();
  const lang = router.query.lang || "en";
  const dict = dictionaries[lang] || dictionaries.en;

  const t = (key) =>
    key.split(".").reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), dict);

  return { t, lang };
}