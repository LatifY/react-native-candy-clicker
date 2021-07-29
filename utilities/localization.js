import * as Localization from 'expo-localization';

import i18n from "i18n-js"

import { en, tr } from "./language"

i18n.translations = {en, tr}
i18n.locale = Localization.locale.substring(0,2)

export const t = (key) => {
  return i18n.t(key)
}