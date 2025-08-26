import { 
  Khmer,
  English
} from "~/store/json"
import { ref, onMounted, type Ref } from 'vue'

type Language = 'en' | 'km'
type TranslationsData = Record<string, string>

interface Translations {
  language: Language
  data: TranslationsData
}

export const useTranslation = () => {
    const translations: Ref<Translations> = ref<Translations>({
        language: 'en',
        data: {}
    })

    const langs: Record<Language, TranslationsData> = { en: English, km: Khmer }

    const setDefault = (lang: Language): void => {
        translations.value.language = lang
        translations.value.data = langs[lang]
        save()
    }

    const save = (): void => {
        localStorage.setItem('translations', JSON.stringify(translations.value))
    }

    const toggleLanguage = (): void => {
        const newLang: Language = translations.value.language === 'en' ? 'km' : 'en'
        translations.value.language = newLang
        translations.value.data = langs[newLang]
        save()
    }

    const t = (key: string) => translations.value.data[key] || key

    onMounted((): void => {
        const saved = localStorage.getItem('translations')
        const defaultLang: Language = 'en'

        if (saved) {
        try {
            translations.value = JSON.parse(saved)
        } catch {
            setDefault(defaultLang)
        }
        } else {
        setDefault(defaultLang)
        }
    })

    return {
        translations,
        toggleLanguage,
        t
    }
}
