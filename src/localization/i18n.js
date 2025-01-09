import { createI18n } from "vue-i18n";
import { en } from "./en.js"
import { fr } from "./fr.js"

export default () => {
  return createI18n({
    // fall back to common messages silently
    // when strings are not avialable in SFC
    // i18n community
    locale: 'en',
    // default language when translation not
    // available in active language. If French
    // not (yet) available it will fall back to english
    messages: {
      en: en,
      fr: fr
    } // set locale messages
  });
};